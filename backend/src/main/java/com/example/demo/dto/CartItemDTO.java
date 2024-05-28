package com.example.demo.dto;

import java.math.BigDecimal;

public class CartItemDTO {
    private int cart_item_id;
    private int quantity;

    private BigDecimal decimal;

    public CartItemDTO(int cart_item_id, int quantity, BigDecimal decimal) {
        this.cart_item_id = cart_item_id;
        this.quantity = quantity;
        this.decimal = decimal;
    }

    public int getCart_item_id() {
        return cart_item_id;
    }

    public void setCart_item_id(int cart_item_id) {
        this.cart_item_id = cart_item_id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getDecimal() {
        return decimal;
    }

    public void setDecimal(BigDecimal decimal) {
        this.decimal = decimal;
    }
}
