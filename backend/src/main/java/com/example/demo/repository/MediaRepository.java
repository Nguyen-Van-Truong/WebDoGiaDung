package com.example.demo.repository;

import com.example.demo.api.controller.Medias;
import com.example.demo.api.controller.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MediaRepository extends JpaRepository<Medias, Integer> {
}
