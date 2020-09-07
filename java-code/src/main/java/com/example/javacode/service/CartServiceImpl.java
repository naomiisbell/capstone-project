package com.example.javacode.service;

import com.example.javacode.models.Cart;
import com.example.javacode.repositories.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import java.util.Optional;


@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Override
    public Iterable<Cart> listUsers() {
        return cartRepository.findAll();
    }

    @Override
    public Cart createCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public Cart checkCart(String name, String price) {
        return cartRepository.checkCart(name, price);
    }

    @Override
    public Long getCartId(String name, String price) {
        return cartRepository.checkCart(name, price).getId();
    }

    @Override
    public HttpStatus deleteProduct(Long cartId) {
        cartRepository.deleteById(cartId);
        return HttpStatus.OK;
    }

    @Override
    public Cart getCartById(Long Id) {
        if( cartRepository.findById(Id).isPresent()){
            return cartRepository.findById(Id).get();
        }
        return null;
    }

    @Override
    public Double cartTotal() {
        double total = 0;
        for (Cart cartTemp : listUsers()) {
            total = total + cartTemp.getPrice();
        }
        return total;
    }

}
