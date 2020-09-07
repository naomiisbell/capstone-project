package com.example.javacode.repositories;

import com.example.javacode.models.Cart;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CartRepository extends CrudRepository<Cart,Long> {
    @Query("FROM Cart c WHERE c.name = ?1 and c.price = ?2")
    Cart checkCart(String nameParam, String priceParam);
}
