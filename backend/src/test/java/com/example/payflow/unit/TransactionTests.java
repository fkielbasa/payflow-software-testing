package com.example.payflow.unit;

import com.example.payflow.model.Transaction;
import com.example.payflow.repository.TransactionRepository;
import com.example.payflow.service.TransactionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TransactionTests {

    private TransactionRepository transactionRepository;
    private TransactionService transactionService;

    @BeforeEach
    void setUp() {
        transactionRepository = mock(TransactionRepository.class);
        transactionService = new TransactionService(transactionRepository);
    }

    @Test
    void Should_return_transaction_when_id_exists() {
        // Given
        Long transactionId = 1L;
        Transaction transaction = new Transaction();
        transaction.setIdTransaction(transactionId);

        when(transactionRepository.findById(transactionId)).thenReturn(Optional.of(transaction));

        // When
        Transaction result = transactionService.getTransactionById(transactionId);

        // Then
        assertNotNull(result);
        assertEquals(transactionId, result.getIdTransaction());
        verify(transactionRepository, times(1)).findById(transactionId);
    }
}
