package com.example.demo.repository;

import com.example.demo.dto.ProductMediaInfo;
import com.example.demo.model.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Set;

public interface ProductRepository extends JpaRepository<Products, Integer> {

    @Query("SELECT new com.example.demo.dto.ProductMediaInfo(p.product_id,p.product_name, p.description, p.price, p.stock_quantity, m.file_url) "
            + "FROM Products p JOIN p.medias m "
            + "GROUP BY p.product_id")
    List<ProductMediaInfo> findProductsWithMedia(Pageable pageable);

    @Query("SELECT p FROM Products p WHERE (:categories IS NULL OR p.category.categoryId IN :categories)")
    Page<Products> findByCategoriesIn(@Param("categories") Set<Integer> categories, Pageable pageable);

    @Query("SELECT p FROM Products p WHERE (:category is null or p.category.categoryId = :category)")
    Page<Products> findByCategory(@Param("category") Integer categoryId, Pageable pageable);

    @Query("SELECT p FROM Products p JOIN OrderDetails od ON p.product_id = od.product.product_id "
            + "GROUP BY p.product_id ORDER BY SUM(od.quantity) DESC")
    List<Products> findTopSellingProducts(Pageable pageable);

    @Query("SELECT p FROM Products p JOIN Medias od ON p.product_id = od.products.product_id " +"where p.product_id = :product_id")
    Products details_products(@Param("product_id") int id);

    @Query("SELECT new com.example.demo.dto.ProductMediaInfo(p.product_id,p.product_name, p.description, p.price, p.stock_quantity, m.file_url) "
            + "FROM Products p JOIN p.medias m "
            + "WHERE YEAR(p.created_at) = YEAR(CURRENT_DATE) "
            + "AND MONTH(p.created_at) = MONTH(CURRENT_DATE) "
            + "AND DAY(p.created_at) = DAY(CURRENT_DATE) "
            + "GROUP BY p.product_id")
    List<ProductMediaInfo> findGetNew(Pageable pageable);


    @Query("SELECT new com.example.demo.dto.ProductMediaInfo(p.product_id,p.product_name, p.description, p.price, p.stock_quantity, m.file_url) "
            + "FROM Products p JOIN p.medias m WHERE p.product_name LIKE CONCAT('%',:productName, '%')"
            + "GROUP BY p.product_id")
    List<ProductMediaInfo> searchProduct(@Param("productName") String productName);

}
