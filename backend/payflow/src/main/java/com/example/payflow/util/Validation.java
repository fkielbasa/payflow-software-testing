package com.example.payflow.util;

import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.UserRepository;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Validation {

    private final UserRepository userRepository;
    private final AccountNumberRepository accountNumberRepository;

    boolean isLoginValid(String login){
        return !userRepository.isUserExists(login);
    }
    boolean isAccountNumberValid(String accountNumber){
        return !accountNumberRepository.existsByNumber(accountNumber);
    }
}
