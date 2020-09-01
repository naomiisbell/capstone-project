package com.example.javacode.controller;

import com.example.javacode.models.Computer;
import com.example.javacode.service.ComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/computer")
public class ComputerController {

    @Autowired
    ComputerService computerService;

    @GetMapping
    public Iterable<Computer> findAll() {
        return computerService.listComputers();
    }

    @PostMapping
    public Computer createComputer(@RequestBody Computer computer) {
        return computerService.createComputer(computer);
    }

    @GetMapping("/purchaseComputer/{name}")
    public Computer purchaseComputer(@PathVariable String nameParam) {
        return computerService.purchaseComputer(nameParam);
    }
}