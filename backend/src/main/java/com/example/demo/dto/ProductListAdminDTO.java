package com.example.demo.dto;

import java.math.BigDecimal;
import java.sql.Timestamp;

public class ProductListAdminDTO {
    private int productId;
    private String productName;
    private String categoryName;
    private BigDecimal price;
    private int stockQuantity;
    private Timestamp createdAt;
    private String status;
    private String imageUrl;

    public ProductListAdminDTO() {
    }

    public ProductListAdminDTO(int productId, String productName, String categoryName, BigDecimal price, int stockQuantity, Timestamp createdAt, String status, String imageUrl) {
        this.productId = productId;
        this.productName = productName;
        this.categoryName = categoryName;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.createdAt = createdAt;
        this.status = status;
        this.imageUrl = imageUrl;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
