package com.example.payflow.service;

import com.example.payflow.dto.LoanDTO;
import com.example.payflow.dto.LoanDTOPost;
import com.example.payflow.dto.mapper.LoanDTOMapper;
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
    private LoanDTOMapper loanDTOMapper;

    public Loan getLoanById(Long id) {
        return loanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loan not found"));
    }
    public List<Loan> getLoan(){
        return loanRepository.findAll();
    }
    public List<LoanDTO> getLoansByAccountNumberId(Long id){
        return loanRepository.findAll().stream()
                .filter(loan -> loan.getAccountNumber().getId().equals(id))
                .map(loan -> new LoanDTO(loan.getId(),loan.getAmount(),loan.getStartDate(),loan.getEndDate(),loan.getInterestRate(),loan.getAccountNumber().getId()))
                .toList();
    }
    public LoanDTO addLoan(LoanDTOPost loan) {
        LocalDate currentDate = LocalDate.now();
        Optional<AccountNumber> ac = accountNumberRepository.findById(loan.getIdAccount());
        if (ac.isPresent()) {
            var l = Loan.builder()
                    .amount(loan.getAmount())
                    .endDate(loan.getEndDate())
                    .startDate(currentDate)
                    .interestRate(loan.getInterestRate())
                    .accountNumber(ac.orElseThrow())
                    .build();
            loanRepository.save(l);
            LoanDTO loanDTO = loanDTOMapper.apply(l);
            return loanDTO;
        }
        return null;
    }
    public boolean checkIfAccountExists(Long id){
        return accountNumberRepository.existsById(id);
    }
}