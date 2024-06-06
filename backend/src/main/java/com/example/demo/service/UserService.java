package com.example.demo.service;

import com.example.demo.dto.AdminUserResponse;
import com.example.demo.dto.OrderAdminDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.model.Orders;
import com.example.demo.model.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.impl.User_impl;

import org.springframework.data.domain.*;
import until.MD5;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import until.OrderConverter;

import java.sql.Timestamp;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService implements User_impl {

    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private MD5 md5 = new MD5();
    private final OrderConverter orderConverter;

    @Autowired
    public UserService(UserRepository userRepository, OrderRepository orderRepository, OrderConverter orderConverter) {
        this.userRepository = userRepository;
        this.orderRepository = orderRepository;
        this.orderConverter = orderConverter;
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
        return false;
    }


    /**
     * cap nhap mật khẩu người dùng
     */
    public boolean updatePassword(int id, String newPassword) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User u = user.get();
            u.setPassword(md5.hash(newPassword));
            userRepository.save(u);
            return true;
        } else {
            return false;
        }
    }

    /**
     * lây mat khau nguoi dung
     */
    public String getPassword(int id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User u = user.get();
            return u.getPassword();
        }
        return null;
    }

    /**
     * lay id nguoi dung theo email
     */
    public int getIdUser(String email) {
        return userRepository.findBy(email);
    }

    // lay danh sach user cho admin quan ly
    public Page<AdminUserResponse> getAllUsers(Pageable pageable, String email) {
        Page<User> users;
        if (email != null && !email.isEmpty()) {
            users = userRepository.findByEmailContaining(email, pageable);
        } else {
            users = userRepository.findAll(pageable);
        }
        return users.map(this::convertToAdminUserResponse);
    }

    private AdminUserResponse convertToAdminUserResponse(User user) {
        int totalOrders = orderRepository.countByUser_Id(user.getUser_id());
        return new AdminUserResponse(user, totalOrders);
    }

    // lay ra thong tin chi tiet cua 1 tai khoan
    public Page<AdminUserResponse> getUserWithOrders(int userId, int page, int size, String sortDirection, String sortBy) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), sortBy);
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Orders> orderPage = orderRepository.findByUserId(userId, pageable);

        List<AdminUserResponse> responses;
        if (orderPage.hasContent()) {
            responses = orderPage.getContent()
                    .stream()
                    .map(order -> convertToAdminUserResponse(user, order))
                    .collect(Collectors.toList());
        } else {
            AdminUserResponse userResponse = new AdminUserResponse(user, Collections.emptyList(), 0);
            responses = Collections.singletonList(userResponse);
        }

        return new PageImpl<>(responses, pageable, orderPage.getTotalElements());
    }


    private AdminUserResponse convertToAdminUserResponse(User user, Orders order) {
        OrderAdminDTO orderDTO = orderConverter.convertToOrderAdminDTO(order);
        return new AdminUserResponse(user, Collections.singletonList(orderDTO), orderRepository.countByUser_Id(user.getUser_id()));
    }
    // cap nhap full name cho nguoi dung
    public User updateFulName(int id, String full_name) {
        Optional<User> users = userRepository.findById(id);
        if (users.isPresent()) {
            User user = users.get();
            user.setFull_name(full_name);
            userRepository.save(user);
            return user;
        } else {
            return null;
        }

    }
}
