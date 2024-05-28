package com.example.demo.service;

import com.example.demo.dto.CartDTO;
import com.example.demo.dto.CartItemDTO;
import com.example.demo.dto.CategoryDTO;
import com.example.demo.model.OrderDetails;
import com.example.demo.model.Orders;
import com.example.demo.model.Products;
import com.example.demo.repository.OrderDetailsRepository;
import com.example.demo.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class OrderDetailService {
    @Autowired
    private OrderDetailsRepository orderDetailsRepository;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private  ProductService service;
    @Autowired
    private CartItemService cartItemService;

    public OrderDetailService(OrderDetailsRepository orderDetailsRepository, OrderRepository orderRepository, ProductService service) {
        this.orderDetailsRepository = orderDetailsRepository;
        this.orderRepository = orderRepository;
        this.service = service;
    }

    public void addOrderItems(int order_id, int user_id) {
        Optional<Orders> orders = orderRepository.findById(order_id);
        List<CartDTO> cartItems = cartItemService.list(user_id);
        List<CartItemDTO> cartItemDTOS = cartItemService.findByCartItemDTO(user_id);
        Set<Integer> processedProducts = new HashSet<>();

        if (orders.isPresent() && !cartItems.isEmpty()) {
            Orders order = orders.get();
            for (CartDTO cartItem : cartItems) {
                List<Products> products = service.getListProducts(cartItem.getId_user());
                for (Products product : products) {
                    if (processedProducts.contains(product.getProduct_id())) {
                        continue;
                    }
                    processedProducts.add(product.getProduct_id());

                    for (CartItemDTO cartItemDTO : cartItemDTOS) {

                        BigDecimal bigDecimalValue = cartItemDTO.getDecimal();
                        double doubleValue = bigDecimalValue.doubleValue();
                        OrderDetails orderDetails = new OrderDetails(order, product, cartItemDTO.getQuantity(), doubleValue);
                        orderDetailsRepository.save(orderDetails);

                    }
                }
            }
        }
    }
}
