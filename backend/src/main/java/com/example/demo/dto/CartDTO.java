package com.example.demo.dto;

import java.math.BigDecimal;

public class CartDTO {
    private int cart_item_id;
    private  String url;
    private String name;
    private BigDecimal price;
    private int quantity;

    public CartDTO(int cart_item_id ,String url, String name, BigDecimal price, int quantity) {
      this.cart_item_id = cart_item_id;
        this.url = url;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public int getCart_item_id() {
        return cart_item_id;
    }

    public void setCart_item_id(int cart_item_id) {
        this.cart_item_id = cart_item_id;
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
