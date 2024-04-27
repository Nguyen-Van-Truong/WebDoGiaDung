package com.example.demo.repository;

import com.example.demo.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {
    @Query("SELECT count(o) FROM Orders o WHERE o.user.user_id = :userId")
    int countByUser_Id(@Param("userId") int userId);
}