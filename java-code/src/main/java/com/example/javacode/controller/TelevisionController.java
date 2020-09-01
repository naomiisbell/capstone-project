package com.example.javacode.controller;

import com.example.javacode.models.Television;
import com.example.javacode.service.TelevisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/television")
public class TelevisionController {

    @Autowired
    TelevisionService televisionService;

    @GetMapping
    public Iterable<Television> findAll() {
        return televisionService.listTelevisions();
    }

    @PostMapping
    public Television createTelevision(@RequestBody Television television) {
        return televisionService.createTelevision(television);
    }

    @GetMapping("/purchaseTelevision/{name}")
    public Television purchaseTelevision(@PathVariable String nameParam) {
        return televisionService.purchaseTelevision(nameParam);
    }

}