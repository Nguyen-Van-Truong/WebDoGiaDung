package com.example.demo.service;

import com.example.demo.model.Orders;
import com.example.demo.model.User;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserRepository;
import org.hibernate.query.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository  userRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }
    public int addOrder(int id_user , Double total, String shippingAddress ){
        Optional<User> userOptional = userRepository.findById(id_user);

        if(userOptional.isPresent()){
            User user = userOptional.get();
            Orders orders = new Orders(user, total, shippingAddress);
            Orders id_orders = orderRepository.save(orders);
            return id_orders.getOrderId();
        }
        else {
            throw new IllegalArgumentException("No user found with id: " +id_user);
        }
    }
}
