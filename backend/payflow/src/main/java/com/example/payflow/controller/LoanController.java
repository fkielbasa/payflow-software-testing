package com.example.payflow.controller;

import com.example.payflow.model.Loan;
import com.example.payflow.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class LoanController {

    private final LoanService loanService;

    @GetMapping("/numbers/{id}/loans")
    public List<Loan> getLoansByAccountNumberId(@PathVariable Long id){
        return loanService.getLoansByAccountNumberId(id);
    }

    @PostMapping("/loan")
    public ResponseEntity<Loan> addLoan(@RequestBody Loan loan) {
        return loanService.addLoan(loan);
    }

}
