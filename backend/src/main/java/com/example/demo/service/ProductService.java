package com.example.demo.service;

import com.example.demo.dto.ProductMediaInfo;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repo;

    @Autowired
    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<ProductMediaInfo> getProducts(int count, String sortOrder) {
        Sort sort = Sort.by("created_at");
        sort = "asc".equalsIgnoreCase(sortOrder) ? sort.ascending() : sort.descending();
        return repo.findProductsWithMedia(PageRequest.of(0, count, sort));
    }


}
