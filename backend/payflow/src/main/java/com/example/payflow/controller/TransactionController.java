package com.example.payflow.controller;

import com.example.payflow.service.TransactionService;
import com.example.payflow.model.Transaction;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * Controller class responsible for managing operations related to transactions.
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class TransactionController {

    /**
     * Service for handling transaction operations.
     */
    private final TransactionService transactionService;

    /**
     * Retrieves a transaction by its ID using a HTTP GET request.
     *
     * @param id Transaction ID to retrieve.
     * @return ResponseEntity with the {@link Transaction} if found, else returns a 404 status.
     */
    @GetMapping("/transactions/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable Long id) {
        Transaction transaction = transactionService.getTransactionById(id);
        if (transaction != null) {
            return ResponseEntity.ok(transaction);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
