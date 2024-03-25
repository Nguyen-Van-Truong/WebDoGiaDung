package com.example.demo.service;

import com.example.demo.api.controller.ProductMediaInfo;
import com.example.demo.api.controller.Products;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService {
    private  final ProductRepository repo ;
    @Autowired
    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }
    public List<ProductMediaInfo>getAllList(){
      return   repo.findAllProductsWithMedia();
    }
}
