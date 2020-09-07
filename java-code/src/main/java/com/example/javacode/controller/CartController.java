package com.example.javacode.controller;

import com.example.javacode.models.Cart;
import com.example.javacode.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/cart")

public class CartController {

    @Autowired
    CartService cartService;

    @PostMapping
    public Cart createCart(@RequestBody Cart cartParam) {
        return cartService.createCart(cartParam);

    }
    @GetMapping
    public Iterable<Cart> findAll() {
        return cartService.listUsers();
    }

    @GetMapping("/checkCart/{nameParam}/{priceParam}")
    public Cart checkCart(@PathVariable String nameParam,
                              @PathVariable String priceParam) {
        return cartService.checkCart(nameParam, priceParam);
    }

    @GetMapping("/getCartId/{nameParam}/{priceParam}")
    public Long getCartId(@PathVariable String nameParam,
                              @PathVariable String priceParam) {
        return cartService.checkCart(nameParam, priceParam).getId();
    }
    @GetMapping("/getCartById/{cartIdParam}")
    public Cart getCartById(@PathVariable Long cartIdParam) {
        return cartService.getCartById(cartIdParam);
    }

    @GetMapping("/cartTotal")
    public Double cartTotal() {
        return cartService.cartTotal();
    }

    @DeleteMapping("/{cartId}")
    public HttpStatus deleteProduct(@PathVariable Long cartId) {
        return cartService.deleteProduct(cartId);
    }
}

