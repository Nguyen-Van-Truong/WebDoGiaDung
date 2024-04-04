package com.example.demo.repository;

import com.example.demo.dto.ProductMediaInfo;
import com.example.demo.model.Products;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Products, Integer> {

    @Query("SELECT new com.example.demo.dto.ProductMediaInfo(p.product_name, p.description, p.price, p.stock_quantity, m.file_url) " +
            "FROM Products p JOIN p.medias m")
    List<ProductMediaInfo> findProductsWithMedia(Pageable pageable);


}
