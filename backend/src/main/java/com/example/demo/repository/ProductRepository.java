package com.example.demo.repository;

import com.example.demo.dto.ProductMediaInfo;
import com.example.demo.model.Products;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Products, Integer> {

	@Query("SELECT new com.example.demo.dto.ProductMediaInfo(p.product_name, p.description, p.price, p.stock_quantity, m.file_url) "
			+ "FROM Products p JOIN p.medias m")
	List<ProductMediaInfo> findProductsWithMedia(Pageable pageable);

	@Query("SELECT p FROM Products p JOIN OrderDetails od ON p.product_id = od.product.product_id "
			+ "GROUP BY p.product_id ORDER BY SUM(od.quantity) DESC")
	List<Products> findTopSellingProducts(Pageable pageable);

	@Query("SELECT new com.example.demo.dto.ProductMediaInfo(p.product_name, p.description, p.price, p.stock_quantity, m.file_url) "
			+ "FROM Products p JOIN p.medias m " + "WHERE YEAR(p.created_at) = YEAR(CURRENT_DATE) "
			+ "AND MONTH(p.created_at) = MONTH(CURRENT_DATE) " + "AND DAY(p.created_at) = DAY(CURRENT_DATE)")
	List<ProductMediaInfo> findGetNew(Pageable pageable);

}
