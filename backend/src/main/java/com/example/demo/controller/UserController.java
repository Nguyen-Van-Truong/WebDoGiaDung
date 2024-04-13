package com.example.demo.controller;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users") // Base path for all endpoints in this controller
public class UserController {

	private final UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	// Get all users
	@GetMapping
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}

	// Get a single user by ID
	@GetMapping("/{userId}")
	public ResponseEntity<User> getUserById(@PathVariable int userId) {
		Optional<User> user = userService.getUserById(userId);
		return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
	}

	// Create a new user
	@PostMapping
	public User createUser(@RequestBody User newUser) {
		return userService.saveUser(newUser);
	}

	// Update an existing user
	@PutMapping("/{userId}")
	public ResponseEntity<User> updateUser(@PathVariable int userId, @RequestBody User updatedUser) {
		return userService.updateUser(userId, updatedUser).map(ResponseEntity::ok)
				.orElseGet(() -> ResponseEntity.notFound().build());
	}

	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody UserDTO dto) {

	    String email = dto.getEmail();
	   
	    String password = dto.getPassword(); 
	    System.out.println("name" + dto.getUsername());
	    System.out.println("email" + dto.getEmail());
	    System.out.println("pass" + dto.getPassword());
	    System.out.println("confirm" + dto.getConfirmPassword());
        if(password.isEmpty()) {
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
