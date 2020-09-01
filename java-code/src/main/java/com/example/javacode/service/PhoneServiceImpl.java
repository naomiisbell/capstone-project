package com.example.javacode.service;

import com.example.javacode.models.Phone;
import com.example.javacode.repositories.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhoneServiceImpl implements PhoneService {
    @Autowired
    PhoneRepository phoneRepository;

    @Override
    public Iterable<Phone> listPhones() {
        return phoneRepository.findAll();
    }

    @Override
    public Phone purchasePhone(String name) {
        return phoneRepository.purchasePhone(name);
    }

    @Override
    public Phone createPhone(Phone phone) {
        return phoneRepository.save(phone);
    }
}
