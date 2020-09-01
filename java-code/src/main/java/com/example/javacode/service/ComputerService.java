package com.example.javacode.service;

import com.example.javacode.models.Computer;

public interface ComputerService {
    Iterable<Computer> listComputers();
    Computer purchaseComputer(String name);
    Computer createComputer(Computer computer);
}