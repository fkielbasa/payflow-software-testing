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
/**
 * Service handling operations on bank account numbers.
 */
@AllArgsConstructor
@Service
public class AccountNumberService {
    private final AccountNumberRepository accountNumberRepository;
    private final UserRepository userRepository;
    private final AccountNumberDtoMapper accountNumberDtoMapper;
    private static final BigDecimal START_BALANCE = new BigDecimal(100);

    /**
     * Retrieves all bank account numbers.
     *
     * @return List of bank account numbers.
     */
    public List<AccountNumber> getAccountNumbers() {
        return accountNumberRepository.findAll();
    }
    /**
     * Retrieves bank account numbers for a given user.
     *
     * @param id User identifier.
     * @return List of bank account numbers for the user.
     */
    public List<AccountNumberDTO> getAccountNumberByUserId(Long id){
        return userRepository.findById(id).get().getAccountNumbers().stream()
                .map(accountNumberDtoMapper)
                .toList();
    }


    /**
     * Adds a new bank account for a user.
     *
     * @param id User identifier.
     * @param accountNumber Request object with data of the new bank account.
     * @return DTO of the new bank account.
     */
    public AccountNumberDTO addAccount(Long id, AccountNumberRequestDto accountNumber){
        Optional<User> u = userRepository.findById(id);
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
    /**
     * Retrieves a bank account with the specified identifier.
     *
     * @param id Bank account identifier.
     * @return DTO of the bank account.
     */
    public AccountNumberDTO getAccountNumberById(Long id) {
        Optional<AccountNumber> ac =  accountNumberRepository.findById(id);
        if (ac.isPresent())
            return ac.map(accountNumberDtoMapper).get();
        return null;
    }
}
