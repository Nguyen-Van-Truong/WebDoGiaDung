package com.example.demo.controller;

import com.example.demo.model.Notifications;
import com.example.demo.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
public class NotificationController {
    @Autowired
    private NotificationService notificationService;

    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping("/addNotification")
    public ResponseEntity<String> sendOtpEmail(@RequestParam(value = "id") int id, @RequestParam(value = "message") String message) {
        if (notificationService.addNotification(id, message)) {
            return ResponseEntity.ok("Thêm thành công ");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Thêm thất bại");
        }

    }

    @GetMapping("/getNotifications")
    public ResponseEntity<?> getNotification(@RequestParam(value = "user_id") int id) {
       List<Notifications> notifications = notificationService.notifications(id);
        if (!notifications.isEmpty()) {
            return ResponseEntity.ok(notifications);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Người dùng không tồn tại");
        }

    }
    @GetMapping("/updatetNotifications")
    public  void updateIsRead(@RequestParam(value = "user_id") int id){
        notificationService.updateIsRead(id);
    }

}
