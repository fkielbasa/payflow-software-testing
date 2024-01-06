package com.example.payflow.service;

import com.example.payflow.dto.LoanDTO;
import com.example.payflow.dto.LoanDTOPost;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.model.Loan;
import com.example.payflow.repository.LoanRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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

    public ResponseEntity<Loan> addLoan(LoanDTOPost loan) {
        LocalDate currentDate = LocalDate.now();
        Optional<AccountNumber> ac = accountNumberRepository.findById(loan.getIdAccount());
        if (ac.isPresent()){
            var l = Loan.builder()
                    .amount(loan.getAmount())
                    .endDate(loan.getEndDate())
                    .startDate(currentDate)
                    .interestRate(loan.getInterestRate())
                    .accountNumber(ac.orElseThrow())
                    .build();
            loanRepository.save(l);
            return ResponseEntity.ok(l);
        }
        // todo check it later
        return (ResponseEntity<Loan>) ResponseEntity.badRequest();
    }

//    public List<Loan> getLoansByAccountNumberId(Long id) {
//        List<Loan> results = loanRepository.findAll()
//                .stream()
//                .filter(l -> l.getAccountNumber().getId().equals(id))
//                .toList();
//        return results;
//    }
    public List<LoanDTO> getLoansByAccountNumberId(Long id){
        return loanRepository.findAll().stream()
                .filter(loan -> loan.getAccountNumber().getId().equals(id))
                .map(loan -> new LoanDTO(loan.getAmount(),loan.getStartDate(),loan.getEndDate(),loan.getInterestRate()))
                .toList();
    }
    public boolean checkIfAccountExists(Long id){
        return loanRepository.existsById(id);
    }
}