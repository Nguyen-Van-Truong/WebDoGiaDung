package com.example.demo.controller;

import com.example.demo.api.controller.ProductMediaInfo;
import com.example.demo.api.controller.Products;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService service;

    @Autowired
    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping("/allproducts")
    public List<ProductMediaInfo> getAll() {
        return service.getAllList();
    }

    @GetMapping("/newest")
    public List<ProductMediaInfo> getNewestProducts(@RequestParam(value = "count", defaultValue = "5") int count) {
        return service.getNewestProducts(count);
    }

}
