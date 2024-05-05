package com.example.demo.model;

public enum PaymentStatus {
    PENDING("pending"),
    COMPLETED("completed"),
    CANCELLED("cancelled"),
    FAILED("failed");

    private final String status;

    PaymentStatus(String status) {
        this.status = status;
    }

    public static PaymentStatus fromString(String status) {
        for (PaymentStatus ps : PaymentStatus.values()) {
            if (ps.status.equalsIgnoreCase(status)) {
                return ps;
            }
        }
        throw new IllegalArgumentException("No constant with text " + status + " found");
    }

    @Override
    public String toString() {
        return this.status;
    }
}
