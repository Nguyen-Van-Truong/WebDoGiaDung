package com.example.demo.service;

import com.example.demo.dto.CartDTO;
import com.example.demo.dto.CartItemDTO;
import com.example.demo.model.Cart;
import com.example.demo.model.CartItems;
import com.example.demo.model.Products;
import com.example.demo.repository.CartItemRepository;
import com.example.demo.repository.CartRepository;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class CartItemService {
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final CartItemRepository cartItemRepository;

    @Autowired
    public CartItemService(CartRepository cartRepository, ProductRepository productRepository, CartItemRepository cartItemRepository) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
        this.cartItemRepository = cartItemRepository;
    }

    public void addCartItems(int user_id, int product_id, int quantity, BigDecimal price) {
        Optional<Cart> carts = cartRepository.findById(user_id);
        Optional<Products> products = productRepository.findById(product_id);
        if (carts.isPresent() && products.isPresent()) {
            Cart cart = carts.get();
            Products product = products.get();
            CartItems cartItems = new CartItems(cart, product, quantity, price);
            cartItemRepository.save(cartItems);
        }
    }

    public List<CartDTO> list(int id) {
        List<CartDTO> cartDTOS = cartItemRepository.getCartItemsBy(id);
        return cartDTOS;
    }
    public  List<CartDTO> listHistory(int id){
        List<CartDTO> cartDTOS = cartItemRepository.history(id);
        return cartDTOS;
    }
    public int count(int id){
        Integer result = cartItemRepository.countCart(id);
        return (result != null) ? result : 0; // Return 0 if the result is null
    }
    public List<CartItemDTO>findByCartItemDTO(int id){
        List<CartItemDTO>cartItemDTOS = cartItemRepository.findByCart_item_id(id);
        return cartItemDTOS;
    }
    public  void updateCart(int id, int quantity, BigDecimal price){
        Optional<CartItems> cartItems = cartItemRepository.findById(id);
      if(cartItems.isPresent()){
          CartItems item= cartItems.get();
          item.setQuantity(quantity);
          item.setPrice(price);
          cartItemRepository.save(item);

      }
    }
}
