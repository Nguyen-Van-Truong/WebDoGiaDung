package com.example.demo.controller;

import com.example.demo.dto.ProductMediaInfo;
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

	@GetMapping("/products")
	public List<ProductMediaInfo> getProducts(
			@RequestParam(value = "count", defaultValue = Integer.MAX_VALUE + "") int count,
			@RequestParam(value = "sortOrder", defaultValue = "desc") String sortOrder) {
		return service.getProducts(count, sortOrder);
	}

	@GetMapping("/top-selling")
	public List<ProductMediaInfo> getTopSellingProducts(@RequestParam(value = "limit", defaultValue = "10") int limit) {
		return service.getTopSellingProducts(limit);
	}

	@GetMapping("/new")
	public List<ProductMediaInfo> getNew(@RequestParam(value = "limit", defaultValue = "10") int limit) {
		return service.getNew(limit);
	}
}
