package com.example.demo.service;

import com.example.demo.dto.AdminUserResponse;
import com.example.demo.dto.UserDTO;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.impl.User_impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import until.MD5;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService implements User_impl {

    private final UserRepository userRepository;
    private MD5 md5 = new MD5();

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;

    }

    // tim kiem dang nhap user theo email và mât khẩu
    public Optional<User> login(String email, String password) {
        return userRepository.login(email, md5.hash(password));
    }

    /**
     * phân đăng kí
     */
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

    /**
     * tim kiem ueser theo id
     *
     * @param id
     * @return
     */


    public boolean checkUpdate(int id, String oldPassword, String newPassword) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User u = user.get();
            if (u.getPassword().equals(oldPassword)) {
               u.setPassword(md5.hash(newPassword));
               userRepository.save(u);
                System.out.println(u.getPassword().toString());
                return true;
            }
        }
        return  false;
    }

    // lay danh sach user cho admin quan ly
    public Page<AdminUserResponse> getAllUsers(Pageable pageable) {
        Page<User> users = userRepository.findAll(pageable);
        return users.map(this::convertToAdminUserResponse);
    }

    private AdminUserResponse convertToAdminUserResponse(User user) {
        return new AdminUserResponse(user);
    }
}
