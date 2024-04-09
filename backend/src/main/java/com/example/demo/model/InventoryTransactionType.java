package com.example.demo.model;

public enum InventoryTransactionType {
    PURCHASE("purchase"),
    SALE("sale"),
    RETURN("return"),
    DAMAGE("damage");

    private final String value;

    InventoryTransactionType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static InventoryTransactionType fromValue(String value) {
        for (InventoryTransactionType type : InventoryTransactionType.values()) {
            if (type.value.equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Invalid InventoryTransactionType value: " + value);
    }
}
