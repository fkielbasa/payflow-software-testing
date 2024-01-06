package com.example.payflow.controller;

import com.example.payflow.dto.LoanDTO;
import com.example.payflow.dto.LoanDTOPost;
import com.example.payflow.dto.mapper.LoanDTOMapper;
import com.example.payflow.model.Loan;
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
        if(loan == null || loan.isEmpty()){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok().body(loan);
    }

    @PostMapping("/loan")
    public ResponseEntity<LoanDTO> addLoan(@RequestBody LoanDTOPost loan) {
        System.out.println(loan.getIdAccount());
        if(loanService.checkIfAccountExists(loan.getIdAccount())){
            LoanDTO loanDTO = loanService.addLoan(loan);
            return new ResponseEntity(loanDTO,HttpStatus.CREATED);
        }
        return new ResponseEntity("Incorrect data or account doesn't exist", HttpStatus.BAD_REQUEST);
    }
}