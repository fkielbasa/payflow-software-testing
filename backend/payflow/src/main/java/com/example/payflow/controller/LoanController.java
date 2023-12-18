package com.example.payflow.controller;

import com.example.payflow.model.Loan;
import com.example.payflow.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class LoanController {

    private final LoanService loanService;

    @GetMapping("/loans")
    public List<Loan> getAllLoans() {
        return loanService.getLoan();
    }

    @GetMapping("/loan/{id}")
    public ResponseEntity<Loan> getLoanById(@PathVariable Long id) {
        Loan loan = loanService.getLoanById(id);
        return ResponseEntity.ok(loan);
    }

    @GetMapping("/account_numbers/{id}/loans")
    public List<Loan> getLoansByAccountNumberId(@PathVariable Long id){
        return loanService.getLoansByAccountNumberId(id);
    }

//    @GetMapping("loan/get")
//    public List<Loan> getLoans(){
//        return loanService.getLoan().stream()
//                .map(loanService.ln())
//                .collect(Collectors.toList());
//    }

    @PostMapping("/loan/add")
    public ResponseEntity<Loan> addLoan(@RequestBody Loan loan) {
        return loanService.addLoan(loan);
    }

}