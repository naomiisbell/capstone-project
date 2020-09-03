package com.example.javacode.repositories;

import com.example.javacode.models.Television;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface TelevisionRepository extends CrudRepository<Television, Long> {
    @Query("FROM Television u WHERE u.name = ?1 and u.price = ?2")
    Television purchaseTelevision(String name);

}