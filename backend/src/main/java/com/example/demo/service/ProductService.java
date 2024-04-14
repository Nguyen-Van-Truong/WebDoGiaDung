package com.example.demo.service;

import com.example.demo.dto.ProductDTO;
import com.example.demo.dto.ProductListAdminDTO;
import com.example.demo.dto.ProductMediaInfo;
import com.example.demo.model.*;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.InventoryTransactionsRepository;
import com.example.demo.repository.MediaRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.*;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private InventoryTransactionsRepository inventoryTransactionsRepository;
    @Autowired
    private MediaRepository mediaRepository;

    @Value("${upload.dir}")
    private String uploadDir;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductMediaInfo> getProducts(int count, String sortOrder) {
        Sort sort = Sort.by("created_at");
        if ("asc".equalsIgnoreCase(sortOrder)) {
            sort = sort.ascending();
        } else {
            sort.descending();
        }

        return productRepository.findProductsWithMedia(PageRequest.of(0, count, sort));
    }

    public List<ProductMediaInfo> getTopSellingProducts(int limit) {
        List<Products> products = productRepository.findTopSellingProducts(PageRequest.of(0, limit));
        List<ProductMediaInfo> info = new ArrayList<>();
        for (Products p : products) {
            String fileUrl = null;
            if (!p.getMedias().isEmpty()) {
                fileUrl = p.getMedias().iterator().next().getFile_url();
            }
            ProductMediaInfo productMediaInfo = new ProductMediaInfo(p.getProduct_name(), p.getDescription(),
                    p.getPrice(), p.getStock_quantity(), fileUrl);
            info.add(productMediaInfo);
        }
        return info;
    }

    public List<ProductMediaInfo> getNew(int limit) {
        List<ProductMediaInfo> originalProductMediaInfos = productRepository.findGetNew(PageRequest.of(0, limit));
        List<ProductMediaInfo> modifiedProductMediaInfos = new ArrayList<>();
        for (ProductMediaInfo p : originalProductMediaInfos) {
            modifiedProductMediaInfos.add(new ProductMediaInfo(p.getProductName(), p.getDescription(), p.getPrice(),
                    p.getStockQuantity(), p.getFileUrl()));
        }

        return modifiedProductMediaInfos;
    }

    public ProductDTO addProduct(ProductDTO productDTO, MultipartFile[] imageFiles) throws IOException {
        Products product = new Products();
        product.setProduct_name(productDTO.getProductName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setStock_quantity(productDTO.getStockQuantity());
        product.setCreated_at(new Timestamp(System.currentTimeMillis()));
        Categories category = categoryRepository.findById(productDTO.getCategoryId()).orElse(null);
        product.setCategory(category);
        // Lưu sản phẩm vao database
        Products savedProduct = productRepository.save(product);

        // Lưu ảnh vào database
        List<String> mediaUrls = new ArrayList<>();
        if (imageFiles != null) {
            for (MultipartFile file : imageFiles) {
                if (!file.isEmpty()) {
                    try {
                        String fileName = storeFile(file);
                        Medias media = new Medias();
                        media.setFile_url("/api/images/" + fileName);
                        media.setUploaded_at(new Timestamp(System.currentTimeMillis()));
                        media.setProducts(savedProduct);
                        mediaRepository.save(media);
                        mediaUrls.add(fileName);
                    } catch (IOException e) {
                        // Handle possible I/O errors
                        e.printStackTrace();
                    }
                }
            }
        }
        productDTO.setMediaUrls(mediaUrls);

        // Khởi tạo giao dịch nhập kho
        InventoryTransactions transaction = new InventoryTransactions();
        transaction.setProductId(savedProduct.getProduct_id());
        int initialQuantity = productDTO.getStockQuantity();
        transaction.setQuantity(initialQuantity);
        transaction.setTransactionType("mua");
        transaction.setTransactionDate(new Timestamp(System.currentTimeMillis()));
        transaction.setNotes("Khởi tạo sản phẩm mới");

        // Lưu giao dịch vào database
        inventoryTransactionsRepository.save(transaction);

        return productDTO;
    }

    /*
     * tim kiem san phan theo chu cai dau
     */
    public List<ProductMediaInfo> seachProduct(String productName) {
        List<ProductMediaInfo> seachList = productRepository.searchProduct(productName);
        List<ProductMediaInfo> save = new ArrayList<>();
        for (ProductMediaInfo p : seachList) {
            save.add(new ProductMediaInfo(p.getProductName(), p.getDescription(), p.getPrice(),
                    p.getStockQuantity(), p.getFileUrl()));
        }
        return save;
    }

    public String storeFile(MultipartFile file) throws IOException {
        Path path = Paths.get(uploadDir);
        if (!Files.exists(path)) {
            Files.createDirectories(path);
        }

        // Tao ten file moi de tranh trung lap
        String originalFileName = file.getOriginalFilename();
        String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
        String uniqueFileName = UUID.randomUUID().toString() + fileExtension;

        // luu file vao thu muc
        File targetFile = new File(path.toFile(), uniqueFileName);
        file.transferTo(targetFile);

        return uniqueFileName;
    }

    public Page<ProductListAdminDTO> listAdminProducts(Integer categoryId, int page, int size, String sortDirection, String sortBy) {
        Sort sort = Sort.by(sortDirection.equalsIgnoreCase("asc") ? Sort.Direction.ASC : Sort.Direction.DESC, sortBy);
        Set<Integer> categoryIds = getAllSubCategoryIds(categoryId);

        // Modify the query to filter by multiple category IDs
        Page<Products> productPage;
        if (categoryIds.isEmpty()) {
            productPage = productRepository.findByCategory(categoryId, PageRequest.of(page, size, sort));
        } else {
            productPage = productRepository.findByCategoriesIn(categoryIds, PageRequest.of(page, size, sort));
        }

        return productPage.map(this::convertToDto);
    }


    private ProductListAdminDTO convertToDto(Products product) {
        String categoryName = product.getCategory() != null ? product.getCategory().getCategoryName() : "";
        String imageUrl = product.getMedias().isEmpty() ? null : product.getMedias().iterator().next().getFile_url();
        return new ProductListAdminDTO(
                product.getProduct_id(),
                product.getProduct_name(),
                categoryName,
                product.getPrice(),
                product.getStock_quantity(),
                product.getCreated_at(),
                product.getStock_quantity() > 0 ? "Còn hàng" : "Hết hàng",
                imageUrl
        );
    }

    private Set<Integer> getAllSubCategoryIds(Integer categoryId) {
        Set<Integer> categoryIds = new HashSet<>();
        if (categoryId == null) {
            return categoryIds; // Return empty set if categoryId is null
        }
        Stack<Categories> stack = new Stack<>();
        Categories rootCategory = categoryRepository.findById(categoryId).orElse(null);
        if (rootCategory == null) {
            return categoryIds; // Return empty if root category does not exist
        }
        stack.push(rootCategory);

        while (!stack.isEmpty()) {
            Categories current = stack.pop();
            categoryIds.add(current.getCategoryId());
            Set<Categories> subcategories = current.getSubCategories();
            if (subcategories != null) {
                stack.addAll(subcategories);
            }
        }
        return categoryIds;
    }


}
