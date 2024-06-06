package com.example.demo.repository;

import com.example.demo.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    Optional<Cart> findById(int cart_id);

    @Query("SELECT c FROM Cart c WHERE c.cart_id = :cart_id")
    List<Cart> findByIdCart(@Param("cart_id") int cart_id);

    @Query("SELECT COUNT(c) FROM Cart c WHERE c.status = 'active'")
    Long findTotalActiveCarts();
}
