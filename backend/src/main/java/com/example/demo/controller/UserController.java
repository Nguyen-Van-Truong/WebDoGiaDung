package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

import until.MD5;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

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
		System.out.println("name" + dto.getUsername());
		System.out.println("email" + dto.getEmail());
		System.out.println("pass" + dto.getPassword());
		System.out.println("confirm" + dto.getConfirmPassword());
		if (password.isEmpty()) {
			return ResponseEntity.badRequest().body("Mật khẩu trống");
		}
		if (userService.checkEmail(email) && userService.CheckPassWordUser(email, password)) {
			userService.save(dto);
			return ResponseEntity.ok("Đăng kí tài khoản thành công");
		} else {
			return ResponseEntity.badRequest().body("Email này đã tồn tại");
		}
	}

}
