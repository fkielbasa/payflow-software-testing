package com.example.payflow.controller;


import com.example.payflow.model.AccountNumber;
import com.example.payflow.service.AccountNumberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class AccountNumberController {
    private final AccountNumberService service;
    @GetMapping
    public List<AccountNumber> getAccountNumbers() {
        return service.getAccountNumbers();
    }

}
