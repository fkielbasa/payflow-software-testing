package com.example.payflow.service;

import com.example.payflow.model.Transaction;
import com.example.payflow.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
@RequiredArgsConstructor
@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;

    public Transaction getTransactionById(Long id) {
        return transactionRepository.findById(id)
                .orElse(null);
    }
}
