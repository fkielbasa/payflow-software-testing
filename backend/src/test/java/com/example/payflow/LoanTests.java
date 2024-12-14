package com.example.payflow;

import com.example.payflow.dto.LoanDTO;
import com.example.payflow.dto.mapper.LoanDTOMapper;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.Loan;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.LoanRepository;
import com.example.payflow.service.AccountNumberService;
import com.example.payflow.service.LoanService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class LoanTests {

    private LoanRepository loanRepository;
    private AccountNumberRepository accountNumberRepository;
    private LoanDTOMapper loanDTOMapper;
    private AccountNumberService accountNumberService;
    private LoanService loanService;

    @BeforeEach
    void setUp() {
        loanRepository = mock(LoanRepository.class);
        accountNumberRepository = mock(AccountNumberRepository.class);
        loanDTOMapper = mock(LoanDTOMapper.class);
        accountNumberService = mock(AccountNumberService.class);

        loanService = new LoanService(loanRepository, accountNumberRepository, loanDTOMapper, accountNumberService);
    }

    @Test
    void Should_get_loans_by_account_number_id() {
        // Given
        Long accountId = 1L;
        Loan loan = Loan.builder().id(1L).amount(BigDecimal.TEN).build();
        AccountNumber accountNumber = new AccountNumber();
        accountNumber.setLoans(List.of(loan));

        when(accountNumberRepository.findById(accountId)).thenReturn(Optional.of(accountNumber));
        when(loanDTOMapper.apply(loan)).thenReturn(new LoanDTO(
                1L, new BigDecimal("5000"), null, null, null, 1L
        ));

        // When
        List<LoanDTO> loans = loanService.getLoansByAccountNumberId(accountId);

        // Then
        assertEquals(1, loans.size());
        assertEquals(loan.getId(), loans.get(0).getId());
        verify(accountNumberRepository, times(1)).findById(accountId);
        verify(loanDTOMapper, times(1)).apply(loan);
    }

    @Test
    void Should_remove_loan_by_id() {
        // Given
        Long loanId = 1L;
        Loan loan = Loan.builder().id(loanId).build();

        when(loanRepository.findById(loanId)).thenReturn(Optional.of(loan));

        // When
        Loan removedLoan = loanService.removeLoanById(loanId);

        // Then
        assertNotNull(removedLoan);
        assertEquals(loanId, removedLoan.getId());
        verify(loanRepository, times(1)).deleteById(loanId);
    }
    @Test
    void Should_return_null_when_loan_to_remove_not_found() {
        // Given
        Long loanId = 1L;
        when(loanRepository.findById(loanId)).thenReturn(Optional.empty());

        // When
        Loan removedLoan = loanService.removeLoanById(loanId);

        // Then
        assertNull(removedLoan);
        verify(loanRepository, never()).deleteById(loanId);
    }
}
