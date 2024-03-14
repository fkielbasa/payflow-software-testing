package com.example.payflow.controller;


import com.example.payflow.dto.AccountNumberDTO;
import com.example.payflow.dto.AccountNumberRequestDto;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.AccountNumberType;
import com.example.payflow.model.AddressType;
import com.example.payflow.service.AccountNumberService;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.http.parser.HttpParser;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
/**
 * Controller class for managing operations related to account numbers.
 * Handles HTTP requests for retrieving, adding, and updating account numbers.
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class AccountNumberController {

    /**
     * Service for handling account number operations.
     */
    private final AccountNumberService accountNumberService;

    /**
     * Retrieves a list of all account numbers using a HTTP GET request.
     *
     * @return List of AccountNumber objects representing all account numbers.
     */
    @GetMapping("/numbers")
    public List<AccountNumber> getAccountNumbers() {
        return accountNumberService.getAccountNumbers();
    }

    /**
     * Retrieves a list of account numbers associated with a specific user using a HTTP GET request.
     *
     * @param id User ID for whom to retrieve account numbers.
     * @return List of AccountNumberDTO objects representing account numbers for the given user.
     */
    @GetMapping("/users/{id}/numbers")
    public List<AccountNumberDTO> getAccountNumberByUserId(@PathVariable Long id){
        return accountNumberService.getAccountNumberByUserId(id);
    }

    /**
     * Retrieves a specific account number by its ID using a HTTP GET request.
     *
     * @param id Account number ID to retrieve.
     * @return ResponseEntity with AccountNumberDTO if found, else returns a 404 status.
     */
    @GetMapping("/numbers/{id}")
    public ResponseEntity<AccountNumberDTO> getAccountNumberById(@PathVariable Long id){
        AccountNumberDTO ac = accountNumberService.getAccountNumberById(id);
        if (ac != null)
            return ResponseEntity.status(HttpStatus.OK).body(ac);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    /**
     * Adds a new account number for a specific user using a HTTP POST request.
     *
     * @param id             User ID for whom to add the account number.
     * @param accountNumber AccountNumberRequestDto containing the details of the new account number.
     * @return ResponseEntity with AccountNumberDTO if successfully added, else returns a 400 status.
     */
    @PostMapping("/users/{id}/number")
    public ResponseEntity<AccountNumberDTO> addAccount(@PathVariable Long id,@RequestBody AccountNumberRequestDto accountNumber){
        AccountNumberDTO ac = accountNumberService.addAccount(id, accountNumber);
        if (ac != null)
            return ResponseEntity.status(HttpStatus.CREATED).body(ac);
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    }

    @PatchMapping("/numbers/{id}/type")
    public ResponseEntity<?> changeTypeOfAccount(@PathVariable Long id, @RequestParam(name = "type", required = true) AccountNumberType type){
        accountNumberService.changeTypeOfAccount(id, type);
        return ResponseEntity.ok(null);
    }
}
