package com.example.javacode.repositories;

import com.example.javacode.models.Phone;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface PhoneRepository extends CrudRepository<Phone, Long> {
    @Query("FROM Phone u WHERE u.name = ?1 and u.price = ?2")
    Phone purchasePhone(String name);
}
