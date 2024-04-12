package com.example.demo.repository;

import com.example.demo.dto.CategoryDTO;
import com.example.demo.model.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Categories, Integer> {
    @Query("SELECT new com.example.demo.dto.CategoryDTO(c.categoryId, c.categoryName, c.parentCategory.categoryId) " +
            "FROM Categories c")
    List<CategoryDTO> findCategoriesSimplified();
}
