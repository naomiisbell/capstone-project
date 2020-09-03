package com.example.javacode.service;

import com.example.javacode.models.Computer;
import org.springframework.http.HttpStatus;

public interface ComputerService {
    Iterable<Computer> listComputers();
    Computer purchaseComputer(String name);
    Computer createComputer(Computer computer);
    HttpStatus deleteComputer(Long computerId);
}