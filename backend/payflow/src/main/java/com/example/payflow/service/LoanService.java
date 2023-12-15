package com.example.payflow.service;

import com.example.payflow.loan.Loan;
import com.example.payflow.loan.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {

    private final LoanRepository loanRepository;

    @Autowired
    public LoanService(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    public Loan getLoanById(Long id) {
        return loanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loan not found"));
    }
    public List<Loan> getLoan(){
        return loanRepository.findAll();
    }

    public Loan addLoan(Loan loan)  {
        var makeLoan = Loan.builder()
                .amount(loan.getAmount())
                .startDate(loan.getStartDate())
                .endDate(loan.getEndDate())
                .interestRate(loan.getInterestRate())
                .accountNumberLoan(loan.getAccountNumberLoan())
                .build();
        return loanRepository.save(makeLoan);
    }

}