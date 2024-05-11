package com.example.demo.service;

import com.example.demo.dto.CartDTO;
import com.example.demo.model.Cart;
import com.example.demo.model.CartStatus;
import com.example.demo.model.User;
import com.example.demo.repository.CartItemRepository;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private CartItemRepository cartItemRepository;

@Autowired
    public CartService(CartRepository cartRepository, UserRepository userRepository,CartItemRepository cartItemRepository) {
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
        this.cartItemRepository = cartItemRepository;
    }

    /**
     * them vao cart
     */
    public int addCart(int user_id) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Optional<User> user = userRepository.findById(user_id);

        if (user.isPresent()) {
            User u = user.get();
            Cart cart = new Cart(u, timestamp, timestamp, CartStatus.ACTIVE);
            Cart savedCart = cartRepository.save(cart);
            return savedCart.getCart_id();
        } else {
            throw new IllegalArgumentException("No user found with id: " + user_id);
        }
    }

    /**
     * XOÁ SẢN PHẨM
     * @param id
     */
    public void delete(int id){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Optional<Cart> carts = cartRepository.findById( id);
        if(carts.isPresent()){
            Cart cart = carts.get();
            cart.setUpdated_at(timestamp);
            cart.setStatus(CartStatus.INACTIVE);
            cartRepository.save(cart);
        }

    }

    /**
     * CẬP NHẬP SẢN PHẨM ĐÃ THANH TOÁN THÀNH CÔNG
     * @param user_id
     */
    public void updateCheckOut(int user_id){
        List<CartDTO> geCartDTOS = cartItemRepository.getCartItemsBy(user_id);
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        for(CartDTO c: geCartDTOS){
         List<Cart>carts = cartRepository.findByIdCart(c.getId_cart());
         for(Cart cart : carts){
             cart.setUpdated_at(timestamp);
             cart.setStatus(CartStatus.CHECKED_OUT);
             cartRepository.save(cart);
         }
        }
    }
}
