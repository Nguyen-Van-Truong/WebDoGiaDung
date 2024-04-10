package com.example.demo.service;

import com.example.demo.dto.ProductDTO;
import com.example.demo.dto.ProductMediaInfo;
import com.example.demo.model.*;
import com.example.demo.repository.CategoriesRepository;
import com.example.demo.repository.InventoryTransactionsRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import javax.print.attribute.standard.Media;

@Service
public class ProductService {
    private final ProductRepository repo;
    @Autowired
    private CategoriesRepository categoriesRepository;
    @Autowired
    private InventoryTransactionsRepository inventoryTransactionsRepository;

    @Autowired
    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<ProductMediaInfo> getProducts(int count, String sortOrder) {
        Sort sort = Sort.by("created_at");
        if ("asc".equalsIgnoreCase(sortOrder)) {
            sort = sort.ascending();
        } else {
            sort.descending();
        }

        return repo.findProductsWithMedia(PageRequest.of(0, count, sort));
    }

    public List<ProductMediaInfo> getTopSellingProducts(int limit) {
        List<Products> products = repo.findTopSellingProducts(PageRequest.of(0, limit));
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
        List<ProductMediaInfo> originalProductMediaInfos = repo.findGetNew(PageRequest.of(0, limit));
        List<ProductMediaInfo> modifiedProductMediaInfos = new ArrayList<>();
        for (ProductMediaInfo p : originalProductMediaInfos) {
            modifiedProductMediaInfos.add(new ProductMediaInfo(p.getProductName(), p.getDescription(), p.getPrice(),
                    p.getStockQuantity(), p.getFileUrl()));
        }

        return modifiedProductMediaInfos;
    }

    public ProductDTO addProduct(ProductDTO productDTO) {
        Products product = new Products();
        product.setProduct_name(productDTO.getProductName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setStock_quantity(productDTO.getStockQuantity());
        product.setCreated_at(new Timestamp(System.currentTimeMillis()));
        Categories category = categoriesRepository.findById(productDTO.getCategoryId()).orElse(null);
        product.setCategory(category);
        // Lưu sản phẩm vao database
        Products savedProduct = repo.save(product);

        // Khởi tạo giao dịch nhập kho
        InventoryTransactions transaction = new InventoryTransactions();
        transaction.setProductId(savedProduct.getProduct_id());
        int initialQuantity = productDTO.getStockQuantity();
        transaction.setQuantity(initialQuantity);
        transaction.setTransactionType(InventoryTransactionType.PURCHASE);
        transaction.setTransactionDate(new Timestamp(System.currentTimeMillis()));
        transaction.setNotes("Khởi tạo sản phẩm mới");

        // Lưu giao dịch vào database
        inventoryTransactionsRepository.save(transaction);

        return productDTO;
    }
 /*
  * tim kiem san phan theo chu cai dau
  */
    public List<ProductMediaInfo> seachProduct(String productName){
    	  List<ProductMediaInfo> seachList = repo.searchProduct(productName);
    	  List<ProductMediaInfo> save = new ArrayList<>();
    	  for (ProductMediaInfo p : seachList) {
    		  save.add(new ProductMediaInfo(p.getProductName(), p.getDescription(), p.getPrice(),
                    p.getStockQuantity(), p.getFileUrl()));
    	  }
		return save;
    }
}
