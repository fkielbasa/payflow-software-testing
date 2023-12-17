package com.example.payflow.service;

import com.example.payflow.transaction.Transaction;
import com.example.payflow.transaction.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
@RequiredArgsConstructor
@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;

    public Transaction getTransactionById(Long id) {
        return transactionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Transaction not found"));
    }
}