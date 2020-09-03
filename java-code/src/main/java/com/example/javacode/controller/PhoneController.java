package com.example.javacode.controller;

import com.example.javacode.models.Phone;
import com.example.javacode.service.PhoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/phone")
public class PhoneController {

    @Autowired
    PhoneService phoneService;

    @GetMapping
    public Iterable<Phone> findAll() {
        return phoneService.listPhones();
    }

    @PostMapping
    public Phone createPhone(@RequestBody Phone phone) {
        return phoneService.createPhone(phone);
    }

    @GetMapping("/purchasePhone/{name}")
    public Phone purchasePhone(@PathVariable String nameParam) {
        return phoneService.purchasePhone(nameParam);
    }

    @DeleteMapping("/{phoneId}")
    public HttpStatus deletePhone(@PathVariable Long phoneId) {
        return phoneService.deletePhone(phoneId);
    }
}
