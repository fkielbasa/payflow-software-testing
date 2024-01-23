package com.example.payflow.controller;

import com.example.payflow.dto.LoanDTO;
import com.example.payflow.dto.LoanDTOPost;
import com.example.payflow.dto.mapper.LoanDTOMapper;
import com.example.payflow.model.Loan;
import com.example.payflow.service.AccountNumberService;
import com.example.payflow.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class LoanController {

    private final LoanService loanService;

    @GetMapping("/numbers/{id}/loans")
    public ResponseEntity<List<LoanDTO>> getLoansByAccountNumberId(@PathVariable Long id){
        List<LoanDTO> loan = loanService.getLoansByAccountNumberId(id);
        if(!loan.isEmpty()){
            return ResponseEntity.ok().body(loan);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/users/{id}/numbers/loans")
    public ResponseEntity<List<LoanDTO>> getAllLoansByUserId(@PathVariable Long id){
        List<LoanDTO> loans = loanService.getAllLoansByUserId(id);
        if (loans != null)
            return ResponseEntity.status(HttpStatus.OK).body(loans);
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping("/numbers/{id}/loan")
    public ResponseEntity<LoanDTO> addLoan(@PathVariable Long id, @RequestBody LoanDTOPost loan) {
        LoanDTO l = loanService.addLoan(id,loan);
        if(l != null){
            return new ResponseEntity(l,HttpStatus.CREATED);
        }
        return new ResponseEntity("Incorrect data or account doesn't exist", HttpStatus.BAD_REQUEST);
    }
    @DeleteMapping("/loan/{id}")
    public ResponseEntity<String> removeLoanById(@PathVariable Long id){
        Loan l = loanService.removeLoanById(id);
        if(l != null){
            return new ResponseEntity("Loan successfully removed.", HttpStatus.OK);
        }
        return new ResponseEntity("Loan doesn't exist.",HttpStatus.BAD_REQUEST);
    }
}
