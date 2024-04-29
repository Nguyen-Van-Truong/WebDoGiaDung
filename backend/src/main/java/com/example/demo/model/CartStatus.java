package com.example.demo.model;
public enum CartStatus {
    ACTIVE("active"),
    INACTIVE("inactive"),
    CHECKED_OUT("checked_out");

    private final String status;

    CartStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return this.status;
    }
}
