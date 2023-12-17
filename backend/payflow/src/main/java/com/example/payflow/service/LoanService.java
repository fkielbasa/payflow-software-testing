package com.example.payflow.service;

import com.example.payflow.account_number.AccountNumber;
import com.example.payflow.account_number.AccountNumberRepository;
import com.example.payflow.loan.Loan;
import com.example.payflow.loan.LoanRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class LoanService {
    private final LoanRepository loanRepository;
    private final AccountNumberRepository accountNumberRepository;

    public Loan getLoanById(Long id) {
        return loanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loan not found"));
    }
    public List<Loan> getLoan(){
        return loanRepository.findAll();
    }

    public ResponseEntity<Loan> addLoan(Loan loan) {
        Optional<AccountNumber> ac = accountNumberRepository.findById(loan.getAccountNumber().getId());
        if (ac.isPresent()){
            var l = Loan.builder()
                    .amount(loan.getAmount())
                    .endDate(loan.getEndDate())
                    .startDate(loan.getStartDate())
                    .interestRate(loan.getInterestRate())
                    .accountNumber(ac.orElseThrow())
                    .build();
            loanRepository.save(l);
            return ResponseEntity.ok(l);
        }

        // todo check it later
        return (ResponseEntity<Loan>) ResponseEntity.badRequest();
    }

    public List<Loan> getLoansByAccountNumberId(Long id) {
        List<Loan> results = loanRepository.findAll()
                .stream()
                .filter(l -> l.getAccountNumber().getId().equals(id))
                .toList();
        return results;
    }
}
