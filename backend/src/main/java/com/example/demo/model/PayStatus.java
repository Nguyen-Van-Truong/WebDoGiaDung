package com.example.demo.model;

public class PayStatus {
    private String status;
    private String message;
    private String transactionNo;
    private String errorMessage;
    private String amount;

    public PayStatus(String status, String message, String transactionNo, String errorMessage, String amount) {
        this.status = status;
        this.message = message;
        this.transactionNo = transactionNo;
        this.errorMessage = errorMessage;
        this.amount = amount;
    }

    // Getters and setters

}
