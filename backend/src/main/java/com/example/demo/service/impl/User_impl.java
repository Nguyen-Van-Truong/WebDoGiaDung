package com.example.demo.service.impl;

import org.springframework.stereotype.Service;

import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;

@Service
public interface User_impl {
	/**
	 * Lưu tài khoản
	 * 
	 * @param userDto
	 */
	public void save(UserDTO userDto);

	/**
	 * kiêm tra password
	 * 
	 * @param email
	 * @param password
	 * @return
	 */
	public boolean CheckPassWordUser(String email, String newPassword);

	/**
	 * 
	 * @param email
	 * @return
	 */
	public User getUser(String email);

	/***
	 * 
	 * @param email
	 * @return
	 */
	public boolean checkEmail(String email);

}
