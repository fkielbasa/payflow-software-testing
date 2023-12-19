package com.example.payflow.service;

import com.example.payflow.dto.AccountNumberDTO;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.User;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class AccountNumberService {
    private final AccountNumberRepository accountNumberRepository;
    private final UserRepository userRepository;
    public List<AccountNumber> getAccountNumbers() {
        return accountNumberRepository.findAll();
    }
    public List<AccountNumberDTO> getAccountNumberByUserId(Long id){
        return accountNumberRepository.findAll().stream()
                .filter(accountNumber -> accountNumber.getUserId().getId().equals(id))
                .map(accountNumber -> new AccountNumberDTO(accountNumber.getId(),accountNumber.getBalance(),
                        accountNumber.getAccountNumberType(),accountNumber.getNumber()))
                .toList();
    }
    public ResponseEntity<AccountNumberDTO> addAccount(AccountNumber accountNumber){
        Optional<User> u = userRepository.findById(accountNumber.getUserId().getId());
        if(u.isPresent()) {
            var a = AccountNumber.builder()
                    .balance(accountNumber.getBalance())
                    .number(accountNumber.getNumber())
                    .currencyType(accountNumber.getCurrencyType())
                    .accountNumberType(accountNumber.getAccountNumberType())
                    .userId(u.get())
                    .build();
            AccountNumber savedAccount = accountNumberRepository.save(a);
            AccountNumberDTO accountNumberDTO = convertToDTO(savedAccount);
            return ResponseEntity.ok(accountNumberDTO);
        }
        return ResponseEntity.badRequest().build();
    }
    private AccountNumberDTO convertToDTO(AccountNumber accountNumber) {
        AccountNumberDTO dto = new AccountNumberDTO();
        dto.setNumber(accountNumber.getNumber());
        return dto;
    }

}
