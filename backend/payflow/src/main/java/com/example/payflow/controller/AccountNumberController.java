package com.example.payflow.controller;


import com.example.payflow.dto.AccountNumberDTO;
import com.example.payflow.dto.AccountNumberRequestDto;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.service.AccountNumberService;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.http.parser.HttpParser;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class AccountNumberController {
    private final AccountNumberService accountNumberService;
    @GetMapping("/numbers")
    public List<AccountNumber> getAccountNumbers() {
        return accountNumberService.getAccountNumbers();
    }
    @GetMapping("/users/{id}/numbers")
    public List<AccountNumberDTO> getAccountNumberByUserId(@PathVariable Long id){
        return accountNumberService.getAccountNumberByUserId(id);
    }

    @GetMapping("/numbers/{id}")
    public ResponseEntity<AccountNumberDTO> getAccountNumberById(@PathVariable Long id){
        AccountNumberDTO ac = accountNumberService.getAccountNumberById(id);
        if (ac != null)
            return ResponseEntity.status(HttpStatus.OK).body(ac);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/number")
    public ResponseEntity<AccountNumberDTO> addAccount(@RequestBody AccountNumberRequestDto accountNumber){
        AccountNumberDTO ac = accountNumberService.addAccount(accountNumber);
        if (ac != null)
            return ResponseEntity.status(HttpStatus.CREATED).body(ac);
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    }
}
