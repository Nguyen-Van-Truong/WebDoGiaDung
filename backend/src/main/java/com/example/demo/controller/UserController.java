package com.example.demo.controller;

import com.example.demo.dto.AdminUserResponse;
import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import until.MD5;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/api/users") // Base path for all endpoints in this controller
public class UserController {
    MD5 md5 = new MD5();
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");
        if (email.isEmpty() && password.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email và mật khẩu không được để trống");
        }
        if (email.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email không được để trống");
        }
        if (password.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mật khẩu không được để trống");
        }

        boolean emailExists = userService.checkEmail(email);
        if (!emailExists) {
            Optional<User> user = userService.login(email, password);
            if (user.isPresent()) {
                return ResponseEntity.ok(user.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mật khẩu không đúng");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email người dùng không tồn tại");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDTO dto) {
        String email = dto.getEmail();
        String password = dto.getPassword();
        String username = dto.getUsername();
        System.out.println("name" + dto.getUsername());
        System.out.println("email" + dto.getEmail());
        System.out.println("pass" + dto.getPassword());
        System.out.println("confirm" + dto.getConfirmPassword());
        if (username.isEmpty()) {
            return ResponseEntity.badRequest().body("Tên người dùng không được để trống");
        }
        if (email.isEmpty()) {
            return ResponseEntity.badRequest().body("Email người dùng không được để trống");
        }
        if (userService.checkEmail(email) && userService.CheckPassWordUser(email, password)) {
            userService.save(dto);
            return ResponseEntity.ok("Đăng kí tài khoản thành công");
        } else {
            return ResponseEntity.badRequest().body("Email này đã tồn tại");
        }
    }


    @GetMapping("/updatePassword")
    public ResponseEntity<?> updateUser(@RequestParam(value = "id") int id, @RequestParam(value = "oldPassword") String oldPassword, @RequestParam(value = "newPassword") String newPassword) {
        if (newPassword.isEmpty()) {
            return ResponseEntity.badRequest().body("Vui lòng nhập mật khẩu mới không được để trống");
        }
        if (userService.checkUpdate(id, oldPassword, newPassword)) {
            return ResponseEntity.ok("Đổi mật khẩu thành công");
        } else {
            return ResponseEntity.badRequest().body("Mật khẩu cũ không chính xác");
        }

    }

    @GetMapping("/getpassword")
    public ResponseEntity<?> getPasswordUser(@RequestParam(value = "id") int id) {
        String password = userService.getPassword(id);
        if (password == null || password.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Người dùng không tồn tại");
        } else {
            return ResponseEntity.ok(password);
        }
    }

    @GetMapping("/getUserId")
    public ResponseEntity<?> getUserId(@RequestParam(value = "email") String email) {
        int id = userService.getIdUser(email);
        if (id != 0) {
            return ResponseEntity.ok(id);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không thể tìm thấy id người dùng");
    }

    /**
     * cap nhpa mat khau nguoi dung khi quen mạt khau
     */
    @PostMapping("/updateForgetPassword/{id}")
    public ResponseEntity<?> update_forget_password(@PathVariable int id, @RequestParam(value = "password") String password) {

        boolean result = userService.updatePassword(id, password);
        if (result) {
            return ResponseEntity.ok("Mật khẩu mới đã được cập nhập");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không thể tìm thấy id người dùng");
        }
    }

    @GetMapping("/admin/getAllUsers")
    public Page<AdminUserResponse> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String email) {
        Pageable pageable = PageRequest.of(page, size);
        Page<AdminUserResponse> userPage = userService.getAllUsers(pageable, email);
        return userPage;
    }

    // lay ra thong tin chi tiet cua 1 tai khoan
    @GetMapping("/admin/getUser/{id}")
    public Page<AdminUserResponse> getUserWithOrders(
            @PathVariable int id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "desc") String sortDirection,
            @RequestParam(defaultValue = "orderDate") String sortBy) {
        return userService.getUserWithOrders(id, page, size, sortDirection, sortBy);
    }
    /**
     * cap nhap ten day du nguoi dung
     */

    @GetMapping("/updateFullName")
    public ResponseEntity<User> updateFullName(@RequestParam int id, @RequestParam String full_name) {
        User updatedUser = userService.updateFulName(id, full_name);
        if (updatedUser != null) {
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
