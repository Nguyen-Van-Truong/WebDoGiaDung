package com.example.demo.service;

import com.example.demo.dto.StatisticsDTO;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatisticsService {

    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    @Autowired
    public StatisticsService(OrderRepository orderRepository, CartRepository cartRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    public StatisticsDTO getStatistics() {
        StatisticsDTO statisticsDTO = new StatisticsDTO();

        statisticsDTO.setTotalRevenue(orderRepository.findTotalRevenue());
        statisticsDTO.setTotalOrders(orderRepository.findTotalOrders());
        statisticsDTO.setTotalActiveCarts(cartRepository.findTotalActiveCarts());
        statisticsDTO.setTotalAdminUsers(userRepository.findTotalAdminUsers());
        statisticsDTO.setTotalRegularUsers(userRepository.findTotalRegularUsers());
        statisticsDTO.setTotalProducts(productRepository.findTotalProducts());

        // Calculate total products sold
        statisticsDTO.setTotalProductsSold(orderRepository.findTotalOrders());

        return statisticsDTO;
    }
}
