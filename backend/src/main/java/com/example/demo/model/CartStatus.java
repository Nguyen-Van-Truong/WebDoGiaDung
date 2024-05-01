package com.example.demo.model;
public enum CartStatus {
    ACTIVE("active"),
    INACTIVE("inactive"),
    CHECKED_OUT("checked_out");

    private final String status;

    CartStatus(String status) {
        this.status = status;
    }
    public static CartStatus fromString(String status) {
        for (CartStatus cs : CartStatus.values()) {
            if (cs.status.equalsIgnoreCase(status)) {
                return cs;
            }
        }
        throw new IllegalArgumentException("No constant with text " + status + " found");
    }
    @Override
    public String toString() {
        return this.status;
    }
}
