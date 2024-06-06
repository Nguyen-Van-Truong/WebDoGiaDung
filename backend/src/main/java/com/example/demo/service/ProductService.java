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
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;

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

    @Value("${databaseName}")
    private String databaseName;
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
            ProductMediaInfo productMediaInfo = new ProductMediaInfo(p.getProduct_id(), p.getProduct_name(), p.getDescription(),
                    p.getPrice(), p.getStock_quantity(), fileUrl);
            info.add(productMediaInfo);
        }
        return info;
    }

    public List<ProductMediaInfo> getNew(int limit) {
        List<ProductMediaInfo> originalProductMediaInfos = productRepository.findGetNew(PageRequest.of(0, limit));
        List<ProductMediaInfo> modifiedProductMediaInfos = new ArrayList<>();
        for (ProductMediaInfo p : originalProductMediaInfos) {
            modifiedProductMediaInfos.add(new ProductMediaInfo(p.getProductId(), p.getProductName(), p.getDescription(), p.getPrice(),
                    p.getStockQuantity(), p.getFileUrl()));
        }

        return modifiedProductMediaInfos;
    }

    public ProductDTO addProduct(ProductDTO productDTO, MultipartFile[] imageFiles) throws IOException {
        validateProductDTO(productDTO); // Validate cho product DTO

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
                        // Lưu file anh vào thư mục
                        String fileName = storeFile(file);
                        Medias media = new Medias();
                        media.setFile_url("/api/images/" + fileName);
                        media.setUploaded_at(new Timestamp(System.currentTimeMillis()));
                        media.setProducts(savedProduct);
                        mediaRepository.save(media);
                        mediaUrls.add(fileName);
                    } catch (IOException e) {
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
            save.add(new ProductMediaInfo(p.getProductId(), p.getProductName(), p.getDescription(), p.getPrice(),
                    p.getStockQuantity(), p.getFileUrl()));
        }
        return save;
    }

    private void validateProductDTO(ProductDTO productDTO) {
        List<String> errors = new ArrayList<>();

        if (productDTO.getProductName() == null || productDTO.getProductName().trim().isEmpty()) {
            errors.add("Product name is required.");
        }
        if (productDTO.getPrice() == null || productDTO.getPrice().compareTo(BigDecimal.ZERO) < 0) {
            errors.add("Price is required and must be non-negative.");
        }
        if (productDTO.getStockQuantity() < 0) {
            errors.add("Stock quantity must be non-negative.");
        }
        if (productDTO.getCategoryId() <= 0) {
            errors.add("Valid category ID is required.");
        }

        if (!errors.isEmpty()) {
            throw new IllegalArgumentException("Validation error: " + String.join(", ", errors));
        }
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

    public Page<ProductListAdminDTO> listAdminProducts(Integer categoryId, int page, int size, String sortDirection, String sortBy, String keyword) {
        Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), sortBy);
        Pageable pageable = PageRequest.of(page, size, sort);
        if (categoryId != null) {
            return productRepository.findByCategoryAndName(categoryId, keyword, pageable);
        } else {
            return productRepository.findByName(keyword, pageable);
        }
    }

    public Page<ProductListAdminDTO> listUserProducts(Integer categoryId, int page, int size, String sortDirection, String sortBy) {
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
                product.getStatus(),
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

    public Products products(int id) {
        Products products = productRepository.details_products(id);
        return products;
    }

    public ProductDTO updateProduct(int productId, ProductDTO productDTO, MultipartFile[] files, List<String> filesToDelete) throws IOException {
        Products product = productRepository.findById(productId).orElseThrow(() -> new IllegalArgumentException("Product not found"));

        product.setProduct_name(productDTO.getProductName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setStock_quantity(productDTO.getStockQuantity());
        product.setStatus(productDTO.getStatus());
        Categories category = categoryRepository.findById(productDTO.getCategoryId()).orElseThrow(() -> new IllegalArgumentException("Category not found"));
        product.setCategory(category);

        // Cap nhat thong tin san pham
        Products updatedProduct = productRepository.save(product);

        // them anh moi
        if (files != null) {
            for (MultipartFile file : files) {
                if (!file.isEmpty()) {
                    String fileName = storeFile(file); // luu file anh vao thu muc trong server
                    Medias media = new Medias();
                    media.setFile_url("/api/images/" + fileName);
                    media.setUploaded_at(new Timestamp(System.currentTimeMillis()));
                    media.setProducts(updatedProduct);
                    mediaRepository.save(media);
                }
            }
        }

        System.out.println("filesToDelete:" + filesToDelete);
        // Xoa anh cu
        if (filesToDelete != null) {
            for (String fileName : filesToDelete) {
                mediaRepository.deleteByFileUrl(fileName);
            }
        }

        return convertToDTO(updatedProduct);
    }

    private ProductDTO convertToDTO(Products product) {
        ProductDTO dto = new ProductDTO();
        dto.setProductName(product.getProduct_name());
        dto.setDescription(product.getDescription());
        dto.setPrice(product.getPrice());
        dto.setStockQuantity(product.getStock_quantity());
        dto.setCategoryId(product.getCategory().getCategoryId());
        dto.setStatus(product.getStatus());
        dto.setMediaUrls(product.getMedias().stream().map(Medias::getFile_url).collect(Collectors.toList()));
        return dto;
    }

    public List<String> getAllProductStatuses() {
        String enumString = productRepository.findStatusEnumType(databaseName);
        // Example enumString format: "enum('có sẵn','hết hàng','ngưng sản xuất','ẩn')"
        List<String> statuses = Arrays.stream(enumString.split("'"))
                .filter(ProductService::filterGetEnum)
                .collect(Collectors.toList());
        return statuses;
    }
    public  List<Products> getListProducts(int id_user){
        return productRepository.getProductsBy(id_user);
    }
    private static boolean filterGetEnum(String str) {
        return !str.matches("enum\\(|\\)|,");
    }


}
