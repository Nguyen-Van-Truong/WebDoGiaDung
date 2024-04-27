package com.example.demo.controller;

import com.example.demo.dto.ProductDTO;
import com.example.demo.dto.ProductListAdminDTO;
import com.example.demo.dto.ProductMediaInfo;
import com.example.demo.model.Products;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // lấy tất cả sản phẩm có thể chọn số lượng và thứ tự sắp xếp
    @GetMapping("/products")
    public List<ProductMediaInfo> getProducts(
            @RequestParam(value = "count", defaultValue = Integer.MAX_VALUE + "") int count,
            @RequestParam(value = "sortOrder", defaultValue = "desc") String sortOrder) {
        return productService.getProducts(count, sortOrder);
    }

    @GetMapping("/admin/products")
    public Page<ProductListAdminDTO> getAdminProducts(
            @RequestParam(required = false) Integer categoryId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "desc") String sortDirection,
            @RequestParam(defaultValue = "created_at") String sortBy) {

        return productService.listAdminProducts(categoryId, page, size, sortDirection, sortBy);
    }

    // lấy sản phẩm bán chạy
    @GetMapping("/top-selling")
    public List<ProductMediaInfo> getTopSellingProducts(@RequestParam(value = "limit", defaultValue = "10") int limit) {
        return productService.getTopSellingProducts(limit);
    }

    // lấy sản phẩm mới
    @GetMapping("/new")
    public List<ProductMediaInfo> getNew(@RequestParam(value = "limit", defaultValue = "10") int limit) {
        return productService.getNew(limit);
    }

	@GetMapping("/search")
	public List<ProductMediaInfo> getSeach(@RequestParam(value = "keyword") String keyword){
		return productService.seachProduct(keyword);
	}
    // thêm sản phẩm mới
    @PostMapping("/add")
    public ProductDTO addProduct(
            @RequestPart("product") ProductDTO productDTO,
            @RequestPart("files") MultipartFile[] files) throws IOException {
        return productService.addProduct(productDTO, files);
    }

    // Update an existing product
    @PutMapping("/update/{productId}")
    public ProductDTO updateProduct(
            @PathVariable("productId") int productId,
            @RequestPart("product") ProductDTO productDTO,
            @RequestPart(value = "files", required = false) MultipartFile[] files,
            @RequestParam(value = "filesToDelete", required = false) List<String> filesToDelete) throws IOException {

        return productService.updateProduct(productId, productDTO, files, filesToDelete);
    }


    @GetMapping("/product-detail")
    public Products products (@RequestParam(value = "id") int id){
        return productService.products(id);
    }

    @GetMapping("/statuses")
    public List<String> getProductStatuses() {
        return productService.getAllProductStatuses();
    }

}
