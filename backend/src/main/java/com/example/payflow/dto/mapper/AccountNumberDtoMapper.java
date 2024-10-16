package com.example.payflow.dto.mapper;

import com.example.payflow.dto.AccountNumberDTO;
import com.example.payflow.model.AccountNumber;
import org.springframework.stereotype.Service;

import java.util.function.Function;
/**
 * Service class responsible for mapping an AccountNumber entity to an AccountNumberDTO.
 *
 * This class implements the Function interface for functional mapping.
 */
@Service
public class AccountNumberDtoMapper implements Function<AccountNumber, AccountNumberDTO> {

    /**
     * Maps an AccountNumber entity to an AccountNumberDTO.
     *
     * @param accountNumber The AccountNumber entity to be mapped.
     * @return AccountNumberDTO containing essential details about the account number.
     */
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
