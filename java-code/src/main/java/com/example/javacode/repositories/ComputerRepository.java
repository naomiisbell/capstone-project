package com.example.javacode.repositories;

import com.example.javacode.models.Computer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ComputerRepository extends CrudRepository<Computer, Long> {
    @Query("FROM Computer u WHERE u.name = ?1 and u.price = ?2")
    Computer purchaseComputer(String name);
}