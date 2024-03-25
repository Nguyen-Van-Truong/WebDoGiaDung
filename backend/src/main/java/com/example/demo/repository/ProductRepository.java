package com.example.demo.repository;

import com.example.demo.api.controller.Products;
import com.example.demo.api.controller.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Products, Integer> {
}
