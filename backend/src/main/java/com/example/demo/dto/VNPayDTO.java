package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

public abstract class VNPayDTO {

    @Data
    @Builder

    public static class VNPayResponse {
        @JsonProperty("id_payment")
        private int id_payment;
        @JsonProperty("code")
        private String code;
        @JsonProperty("message")
        private String message;
        @JsonProperty("paymentUrl")
        private String paymentUrl;
        public VNPayResponse(int id_payment, String code, String message, String paymentUrl) {
            this.id_payment = id_payment;
            this.code = code;
            this.message = message;
            this.paymentUrl = paymentUrl;
        }
        public VNPayResponse(int id_payment, String paymentUrl) {
            this.id_payment = id_payment;
            this.paymentUrl = paymentUrl;
        }
    }
}
