package com.example.javacode.service;

import com.example.javacode.models.Television;

public interface TelevisionService {
    Iterable<Television> listTelevisions();
    Television purchaseTelevision(String name);
    Television createTelevision(Television television);
}