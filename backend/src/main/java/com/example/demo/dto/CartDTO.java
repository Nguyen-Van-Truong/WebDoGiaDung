package com.example.demo.dto;

import com.example.demo.model.CartStatus;

import java.math.BigDecimal;
import java.sql.Timestamp;

public class CartDTO {
    private  int id_user;
    private int id_cart;
    private int cart_item_id;
    private  String url;
    private String name;
    private BigDecimal price;
    private int quantity;
    private Timestamp date;
    private CartStatus status;

    public CartDTO(int id_user ,int id_cart,int cart_item_id ,String url, String name, BigDecimal price, int quantity) {
         this.id_user = id_user;
        this.id_cart = id_cart;
      this.cart_item_id = cart_item_id;
        this.url = url;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public CartDTO(int id_cart, String url, String name, BigDecimal price, int quantity, Timestamp date, CartStatus status) {
        this.id_cart = id_cart;
        this.url = url;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.date = date;
        this.status = status;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public void setStatus(CartStatus status) {
        this.status = status;
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

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
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

    public int getId_cart() {
        return id_cart;
    }

    public void setId_cart(int id_cart) {
        this.id_cart = id_cart;
    }

    public CartStatus getStatus() {
        return status;
    }
}
