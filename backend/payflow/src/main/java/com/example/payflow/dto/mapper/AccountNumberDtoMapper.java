package com.example.payflow.dto.mapper;

import com.example.payflow.dto.AccountNumberDTO;
import com.example.payflow.model.AccountNumber;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class AccountNumberDtoMapper implements Function<AccountNumber, AccountNumberDTO> {
    @Override
    public AccountNumberDTO apply(AccountNumber accountNumber) {
        return new AccountNumberDTO(
                accountNumber.getId(),
                accountNumber.getBalance(),
                accountNumber.getCurrency(),
                accountNumber.getAccountType(),
                accountNumber.getNumber()
        );
    }
}
