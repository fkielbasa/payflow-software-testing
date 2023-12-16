package com.example.payflow.service;

import com.example.payflow.account_number.AccountNumber;
import com.example.payflow.account_number.AccountNumberRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class AccountNumberService {

    private final AccountNumberRepository repository;


    public List<AccountNumber> getAccountNumbers() {
        return repository.findAll();
    }
}
