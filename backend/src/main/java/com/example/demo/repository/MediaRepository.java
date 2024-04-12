package com.example.demo.repository;

import com.example.demo.model.Medias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediaRepository extends JpaRepository<Medias, Integer> {
}
