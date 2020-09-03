package com.example.javacode.service;

import com.example.javacode.models.Phone;
import org.springframework.http.HttpStatus;

public interface PhoneService {
    Iterable<Phone> listPhones();
    Phone purchasePhone(String name);
    Phone createPhone(Phone phone);
    HttpStatus deletePhone(Long phoneId);
}
