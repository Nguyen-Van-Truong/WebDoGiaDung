package com.example.demo.repository;

import com.example.demo.model.Medias;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MediaRepository extends JpaRepository<Medias, Integer> {
}
