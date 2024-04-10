package com.example.demo.controller;

import com.example.demo.dto.ProductDTO;
import com.example.demo.dto.ProductMediaInfo;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
	private final ProductService service;

	@Autowired
	public ProductController(ProductService service) {
		this.service = service;
	}
	// lấy tất cả sản phẩm có thể chọn số lượng và thứ tự sắp xếp
	@GetMapping("/products")
	public List<ProductMediaInfo> getProducts(
			@RequestParam(value = "count", defaultValue = Integer.MAX_VALUE + "") int count,
			@RequestParam(value = "sortOrder", defaultValue = "desc") String sortOrder) {
		return service.getProducts(count, sortOrder);
	}
	// lấy sản phẩm bán chạy
	@GetMapping("/top-selling")
	public List<ProductMediaInfo> getTopSellingProducts(@RequestParam(value = "limit", defaultValue = "10") int limit) {
		return service.getTopSellingProducts(limit);
	}
	// lấy sản phẩm mới
	@GetMapping("/new")
	public List<ProductMediaInfo> getNew(@RequestParam(value = "limit", defaultValue = "10") int limit) {
		return service.getNew(limit);
	}

	// thêm sản phẩm mới
	@PostMapping("/add")
	public ProductDTO addProduct(@RequestBody ProductDTO productDTO) {
		return service.addProduct(productDTO);
	}
	@GetMapping("/search")
	public List<ProductMediaInfo> getSeach(@RequestParam(value = "keyword") String keyword){
		return service.seachProduct(keyword);
	}

}
