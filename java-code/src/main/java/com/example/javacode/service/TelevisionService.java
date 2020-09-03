package com.example.javacode.service;

import com.example.javacode.models.Television;
import org.springframework.http.HttpStatus;

public interface TelevisionService {
    Iterable<Television> listTelevisions();
    Television purchaseTelevision(String name);
    Television createTelevision(Television television);
    HttpStatus deleteTelevision(Long televisionId);
}