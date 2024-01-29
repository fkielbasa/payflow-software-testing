package com.example.payflow.service;

import com.example.payflow.model.Transaction;
import com.example.payflow.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
/**
 * Service class for managing transactions.
 */
@RequiredArgsConstructor
@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;


    /**
     * Retrieves a transaction by its ID.
     *
     * @param id The ID of the transaction to retrieve.
     * @return The transaction with the specified ID, or null if not found.
     */
    public Transaction getTransactionById(Long id) {
        return transactionRepository.findById(id)
                .orElse(null);
    }
}
