package com.example.payflow.controller;

import com.example.payflow.loan.Loan;
import com.example.payflow.loan.LoanRepository;
import com.example.payflow.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
public class LoanController {

    private final LoanService loanService;
    private final LoanRepository loanRepository;

    @Autowired
    public LoanController(LoanService loanService, LoanRepository loanRepository) {
        this.loanService = loanService;
        this.loanRepository = loanRepository;
    }
    @GetMapping("/loans")
    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    @GetMapping("/loan/{id}")
    public ResponseEntity<Loan> getLoanById(@PathVariable Long id) {
        Loan loan = loanService.getLoanById(id);
        return ResponseEntity.ok(loan);
    }
}