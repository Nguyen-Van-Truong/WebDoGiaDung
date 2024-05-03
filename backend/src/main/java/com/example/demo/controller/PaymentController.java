package com.example.demo.controller;

import com.example.demo.service.PaymentService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/create-payment")
    public String createPayment(@RequestParam double amount, @RequestParam String bankCode, @RequestParam String orderInfo, @RequestParam(required = false) String language) {
        return paymentService.generatePaymentUrl(amount, bankCode, orderInfo, language);
    }

}