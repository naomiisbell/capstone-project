package com.example.javacode.service;

import com.example.javacode.models.Phone;

public interface PhoneService {
    Iterable<Phone> listPhones();
    Phone purchasePhone(String name);
    Phone createPhone(Phone phone);
}
