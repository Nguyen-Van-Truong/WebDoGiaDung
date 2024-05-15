package com.example.demo.service;

import com.example.demo.dto.OrderAdminDTO;
import com.example.demo.model.*;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserRepository;
import org.hibernate.query.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public int addOrder(int id_user, Double total, String shippingAddress) {
        Optional<User> userOptional = userRepository.findById(id_user);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Orders orders = new Orders(user, total, shippingAddress);
            Orders id_orders = orderRepository.save(orders);
            return id_orders.getOrderId();
        } else {
            throw new IllegalArgumentException("No user found with id: " + id_user);
        }
    }

    public Page<OrderAdminDTO> findAllOrders(int page, int size, String sortDirection, String sortBy) {
        Sort sort = Sort.by(sortDirection.equalsIgnoreCase("asc") ? Sort.Direction.ASC : Sort.Direction.DESC, sortBy);
        return orderRepository.findAll(PageRequest.of(page, size, sort))
                .map(this::convertToDTO);
    }

    public OrderAdminDTO findOrderById(int orderId) {
        Orders order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        return convertToDTO(order);
    }

    private OrderAdminDTO convertToDTO(Orders order) {
        OrderAdminDTO dto = new OrderAdminDTO();
        dto.setOrderId(order.getOrderId());
        dto.setOrderDate(order.getOrderDate());
        dto.setStatus(order.getStatus());
        dto.setTotal(order.getTotal());
        dto.setShippingAddress(order.getShippingAddress());
        dto.setUser(convertUserToDTO(order.getUser()));
        dto.setOrderDetails(order.getOrderDetails().stream()
                .map(this::convertOrderDetailToDTO)
                .collect(Collectors.toList()));
        return dto;
    }

    private OrderAdminDTO.UserDTO convertUserToDTO(User user) {
        OrderAdminDTO.UserDTO dto = new OrderAdminDTO.UserDTO();
        dto.setUserId(user.getUser_id());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setFullName(user.getFull_name());
        return dto;
    }

    private OrderAdminDTO.OrderDetailDTO convertOrderDetailToDTO(OrderDetails orderDetail) {
        OrderAdminDTO.OrderDetailDTO dto = new OrderAdminDTO.OrderDetailDTO();
        dto.setOrderDetailId(orderDetail.getOrderDetailId());
        dto.setProduct(convertProductToDTO(orderDetail.getProduct()));
        dto.setQuantity(orderDetail.getQuantity());
        dto.setPrice(orderDetail.getPrice());
        return dto;
    }

    private OrderAdminDTO.ProductDTO convertProductToDTO(Products product) {
        OrderAdminDTO.ProductDTO dto = new OrderAdminDTO.ProductDTO();
        dto.setProductId(product.getProduct_id());
        dto.setProductName(product.getProduct_name());
        dto.setPrice(product.getPrice());
        dto.setImageUrl(product.getMedias().stream()
                .findFirst() // Get the first media
                .map(Medias::getFile_url) // Extract the URL
                .orElse(null)); // Or return null if no media is present
        return dto;
    }

    public OrderAdminDTO updateOrderStatus(int orderId, String status) {
        Orders order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status);
        Orders updatedOrder = orderRepository.save(order);
        return convertToDTO(updatedOrder);
    }
}
