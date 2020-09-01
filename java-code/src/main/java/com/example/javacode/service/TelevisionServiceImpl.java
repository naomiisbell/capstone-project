package com.example.javacode.service;

import com.example.javacode.models.Television;
import com.example.javacode.repositories.TelevisionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TelevisionServiceImpl implements TelevisionService {
    @Autowired
    TelevisionRepository televisionRepository;

    @Override
    public Iterable<Television> listTelevisions() {
        return televisionRepository.findAll();
    }

    @Override
    public Television purchaseTelevision(String name) {
        return televisionRepository.purchaseTelevision(name);
    }

    @Override
    public Television createTelevision(Television television) {
        return televisionRepository.save(television);
    }

}