package com.example.demo.repository;

import com.example.demo.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {
    @Query("SELECT count(o) FROM Orders o WHERE o.user.user_id = :userId")
    int countByUser_Id(@Param("userId") int userId);


    Optional<Orders> findById(int id);

    @Query("SELECT o FROM Orders o WHERE o.user.user_id = :userId")
    Page<Orders> findByUserId(int userId, Pageable pageable);
}