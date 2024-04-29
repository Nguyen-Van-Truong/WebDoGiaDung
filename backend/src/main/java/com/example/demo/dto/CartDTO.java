package com.example.demo.dto;

import java.math.BigDecimal;

public class CartDTO {
    private  String url;
    private String name;
    private BigDecimal price;
    private int quantity;

    public CartDTO(String url, String name, BigDecimal price, int quantity) {
        this.url = url;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
