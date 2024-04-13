package com.example.demo.service;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.impl.User_impl;

import until.MD5;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements User_impl {

	private final UserRepository userRepository;
	private MD5 md5 = new MD5();

	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;

	}

	// Fetch all users from the database
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	// Find a single user by ID
	public Optional<User> getUserById(int userId) {
		return userRepository.findById(userId);
	}

	// Save a new user to the database
	public User saveUser(User newUser) {
		return userRepository.save(newUser);
	}

	// Update an existing user
	public Optional<User> updateUser(int userId, User updatedUser) {
		return userRepository.findById(userId).map(user -> {
			user.setUsername(updatedUser.getUsername());
			user.setPassword(updatedUser.getPassword()); // Consider using a password encoder
			user.setEmail(updatedUser.getEmail());
			user.setFull_name(updatedUser.getFull_name());
			user.setAddress(updatedUser.getAddress());
			user.setIs_admin(updatedUser.isIs_admin());
			return userRepository.save(user);
		});
	}

	@Override
	public void save(UserDTO userDto) {
		// TODO Auto-generated method stub
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		User user = new User(userDto.getUsername(), md5.hash(userDto.getPassword()), userDto.getEmail(), "", "", false,
				timestamp);
		userRepository.save(user);
	}

	@Override
	public boolean CheckPassWordUser(String email, String newPassword) {
		// TODO Auto-generated method stub
		/**
		 * keiem tra user do ton tai k
		 */
		if (checkEmail(email) == true) {
			if (!md5.hash(newPassword).isEmpty())
				return true;
		}

		return false;
	}

	@Override
	public User getUser(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean checkEmail(String email) {
		User user = userRepository.findFirstByEmail(email);
		if (user == null) {
			return true;
		} else {
			return false;
		}
	}

}
