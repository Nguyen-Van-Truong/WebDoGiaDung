package com.example.demo.controller;

import com.example.demo.dto.VNPayDTO;
import com.example.demo.model.PayStatus;
import com.example.demo.model.PaymentStatus;
import com.example.demo.service.OrderDetailService;
import com.example.demo.service.OrderService;
import com.example.demo.service.PaymentService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {


    private final PaymentService paymentService;

    private final OrderService orderService;

    private final OrderDetailService orderDetailService;

    @Autowired
    public PaymentController(PaymentService paymentService, OrderService orderService, OrderDetailService orderDetailService) {
        this.paymentService = paymentService;
        this.orderService = orderService;
        this.orderDetailService = orderDetailService;
    }

    @GetMapping(value = "/create-payment", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<VNPayDTO.VNPayResponse> createPayment(@RequestParam int user_id, @RequestParam String shippingAddress,@RequestParam String code  , @RequestParam double amount, @RequestParam String bankCode, @RequestParam String orderInfo, @RequestParam(required = false) String language) {
        int order_id = orderService.addOrder(user_id, amount, shippingAddress);
        orderDetailService.addOrderItems(order_id, user_id);
  int id_payment = paymentService.addPayment(order_id, code, "Online Payment", PaymentStatus.PENDING, amount, "VNĐ");
      String url =paymentService.generatePaymentUrl(user_id,shippingAddress, code ,amount, bankCode, orderInfo, language);
        VNPayDTO.VNPayResponse response = new VNPayDTO.VNPayResponse(id_payment, url);
        return ResponseEntity.ok(response);
    }



    @GetMapping(value = "/paymentResponse")
    public ResponseEntity<?> handlePaymentResponse(
            @RequestParam(value = "vnp_ResponseCode") String vnp_ResponseCode
    ) {
        try {
            if ("00".equals(vnp_ResponseCode)) {
                return ResponseEntity.ok(vnp_ResponseCode);
            } else {
                return ResponseEntity.ok("Thất bại");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing the request: " + e.getMessage());
        }
    }
    @GetMapping(value = "/update")
    public ResponseEntity<?> updatePaymentMethod(@RequestParam(value = "id_payment") int id) {
        try {
            paymentService.updatePayMethod(id);
            return ResponseEntity.ok().build(); // Return a 200 OK if successful
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception to analyze it
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating payment method");
        }
    }

}