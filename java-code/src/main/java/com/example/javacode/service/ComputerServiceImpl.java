package com.example.javacode.service;

import com.example.javacode.models.Computer;
import com.example.javacode.repositories.ComputerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComputerServiceImpl implements ComputerService {
    @Autowired
    ComputerRepository computerRepository;

    @Override
    public Iterable<Computer> listComputers() {
        return computerRepository.findAll();
    }

    @Override
    public Computer purchaseComputer(String name) {
        return computerRepository.purchaseComputer(name);
    }

    @Override
    public Computer createComputer(Computer computer) {
        return computerRepository.save(computer);
    }
}