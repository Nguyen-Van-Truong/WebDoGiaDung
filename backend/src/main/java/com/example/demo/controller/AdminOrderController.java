package com.example.demo.controller;

import com.example.demo.dto.OrderAdminDTO;
import com.example.demo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/admin")
public class AdminOrderController {

    @Autowired
    private OrderService orderService;

    // Get all orders
    @GetMapping("/orders")
    public Page<OrderAdminDTO> getAllOrders(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "desc") String sortDirection,
            @RequestParam(defaultValue = "orderDate") String sortBy) {
        return orderService.findAllOrders(page, size, sortDirection, sortBy);
    }

    // Get a specific order by ID
    @GetMapping("/orders/{orderId}")
    public OrderAdminDTO getOrderById(@PathVariable int orderId) {
        return orderService.findOrderById(orderId);
    }

    // Update an order status
    @PutMapping("/orders/{orderId}/update")
    public OrderAdminDTO updateOrderStatus(@PathVariable int orderId, @RequestParam String status) {
        return orderService.updateOrderStatus(orderId, status);
    }
}
