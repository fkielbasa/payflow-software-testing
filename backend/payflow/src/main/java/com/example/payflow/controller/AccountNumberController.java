package com.example.payflow.controller;


import com.example.payflow.dto.AccountNumberDTO;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.service.AccountNumberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class AccountNumberController {
    private final AccountNumberService accountNumberService;
    @GetMapping("/numbers")
    public List<AccountNumber> getAccountNumbers() {
        return accountNumberService.getAccountNumbers();
    }
    @GetMapping("/numbers/users/{id}")
    public List<AccountNumberDTO> getAccountNumberByUserId(@PathVariable Long id){
        return accountNumberService.getAccountNumberByUserId(id);
    }
    @PostMapping("/numbers/add")
    public ResponseEntity<AccountNumberDTO> addCard(@RequestBody AccountNumber accountNumber){
        return accountNumberService.addAccount(accountNumber);
    }
}
