package com.example.demo.controller;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.EmailService;

import java.util.Map;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;
    private final UserService userService;
    public EmailController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping("/sendOtp")
    public ResponseEntity<String> sendOtpEmail(@RequestBody Map<String, String> send) {

        String email = send.get("email");
        String code = send.get("code");
        boolean emailExists = userService.checkEmail(email);
        if (!emailExists) {
            return ResponseEntity.badRequest().body("Email này đã tồn tại");
        }else{
            emailService.sendOtpEmail(email, code);
            return ResponseEntity.ok("Vui lòng nhập otp xác nhận: " );
        }
    }
    @PostMapping("/checkEmail")
    public ResponseEntity<?> checkEmail(@RequestBody Map<String, String> send) {
        String email = send.get("email");

        boolean emailExists = userService.checkEmail(email);
        if (!emailExists) {
            return ResponseEntity.badRequest().body("Email này đã tồn tại");
        } else {
            return ResponseEntity.ok(true);
        }
    }
    @PostMapping("/checkEmailForgetPassword")
    public ResponseEntity<?> checkEmailForgetPassword(@RequestBody Map<String, String> send) {
        String email = send.get("email");

        boolean emailExists = userService.checkEmail(email);
        if (emailExists) {
            return ResponseEntity.badRequest().body("Email này không tồn tại");
        } else {
            return ResponseEntity.ok(true);
        }
    }
    @PostMapping("/sendOtpForgetPassword")
    public ResponseEntity<String> sendOtpForgetPassword(@RequestBody Map<String, String> send) {
        String email = send.get("email");
        String code = send.get("code");
        emailService.sendOtpEmail(email, code);
        return ResponseEntity.ok("Vui lòng nhập otp xác nhận: " );

    }


}