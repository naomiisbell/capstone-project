package com.example.javacode.service;

import com.example.javacode.models.Cart;
import org.springframework.http.HttpStatus;


public interface CartService {
    Iterable<Cart> listUsers();
    Cart createCart(Cart cart);
    Cart checkCart(String name, String price);
    Long getCartId(String name, String price);
    HttpStatus deleteProduct(Long cartId);
    Cart getCartById(Long Id);
    Double cartTotal();

}
