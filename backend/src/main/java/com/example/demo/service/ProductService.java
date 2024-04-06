package com.example.demo.service;

import com.example.demo.dto.ProductMediaInfo;
import com.example.demo.model.Medias;
import com.example.demo.model.Products;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import javax.print.attribute.standard.Media;

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

	public List<ProductMediaInfo> getTopSellingProducts(int limit) {
		return repo.findTopSellingProducts(PageRequest.of(0, limit)).stream()
				.map(p -> new ProductMediaInfo(p.getProduct_name(), p.getDescription(), p.getPrice(),
						p.getStock_quantity(),
						(p.getMedias().isEmpty() ? null : p.getMedias().iterator().next().getFile_url())))
				.collect(Collectors.toList());
	}

	public List<ProductMediaInfo> getNew(int limit) {
	    List<ProductMediaInfo> originalProductMediaInfos = repo.findGetNew(PageRequest.of(0, limit));
	    List<ProductMediaInfo> modifiedProductMediaInfos = new ArrayList<>(); 

	    for (ProductMediaInfo p : originalProductMediaInfos) {
	       
	        modifiedProductMediaInfos.add(new ProductMediaInfo(p.getProductName(), p.getDescription(), p.getPrice(),
	                p.getStockQuantity(), p.getFileUrl()));
	    }

	    return modifiedProductMediaInfos; 
	}

}
