package com.example.payflow.service;

import com.example.payflow.dto.AccountNumberDTO;
import com.example.payflow.dto.AccountNumberRequestDto;
import com.example.payflow.dto.mapper.AccountNumberDtoMapper;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.User;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.UserRepository;
import com.example.payflow.util.NumberGenerator;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class AccountNumberService {
    private final AccountNumberRepository accountNumberRepository;
    private final UserRepository userRepository;
    private final AccountNumberDtoMapper accountNumberDtoMapper;
    private static final BigDecimal START_BALANCE = new BigDecimal(100);

    public List<AccountNumber> getAccountNumbers() {
        return accountNumberRepository.findAll();
    }
    public List<AccountNumberDTO> getAccountNumberByUserId(Long id){
        return accountNumberRepository.findAll().stream()
                .filter(accountNumber -> accountNumber.getUserId().getId().equals(id))
                .map(accountNumberDtoMapper)
                .toList();
    }

    public AccountNumberDTO addAccount(AccountNumberRequestDto accountNumber){
        Optional<User> u = userRepository.findById(accountNumber.userId());
        if(u.isPresent()) {
            var a = AccountNumber.builder()
                    .balance(START_BALANCE)
                    .number(NumberGenerator.generateAccountNumber())
                    .currency(accountNumber.currency())
                    .accountType(accountNumber.accountType())
                    .userId(u.get())
                    .build();
            accountNumberRepository.save(a);
            return new AccountNumberDTO(
                    a.getId(),
                    a.getBalance(),
                    a.getCurrency(),
                    a.getAccountType(),
                    a.getNumber()
            );
        }
        return null;
    }

    public AccountNumberDTO getAccountNumberById(Long id) {
        Optional<AccountNumber> ac =  accountNumberRepository.findById(id);
        if (ac.isPresent())
            return ac.map(accountNumberDtoMapper).get();
        return null;
    }
}
