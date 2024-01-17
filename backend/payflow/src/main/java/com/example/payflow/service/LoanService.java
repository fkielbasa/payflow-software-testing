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

//    public List<LoanDTO> getLoansByAccountNumberId(Long id){
//        return loanRepository.findAll().stream()
//                .filter(loan -> loan.getAccountNumber().getId().equals(id))
//                .map(loan -> new LoanDTO(loan.getId(),loan.getAmount(),loan.getStartDate(),loan.getEndDate(),loan.getInterestRate(),loan.getAccountNumber().getId()))
//                .toList();
//    }
    public List<LoanDTO> getLoansByAccountNumberId(Long id) {
        return accountNumberRepository.findById(id).get().getLoans().stream()
                .map(loanDTOMapper).toList();
    }
    public LoanDTO addLoan(Long id,LoanDTOPost loan) {
        LocalDate currentDate = LocalDate.now();
        Optional<AccountNumber> ac = accountNumberRepository.findById(id);
        if (ac.isPresent()) {
            var l = Loan.builder()
                    .amount(loan.getAmount())
                    .endDate(loan.getEndDate())
                    .startDate(currentDate)
                    .interestRate(loan.getInterestRate())
                    .accountNumber(ac.orElseThrow())
                    .build();
            loanRepository.save(l);

            //update balance after new loan
            AccountNumber a = ac.get();
            a.setBalance(a.getBalance().add(loan.getAmount()));
            accountNumberRepository.save(a);
            LoanDTO loanDTO = loanDTOMapper.apply(l);
            return loanDTO;
        }
        return null;
    }
    public Loan removeLoanById(Long id) {
        Optional<Loan> l = loanRepository.findById(id);
        if(l.isPresent()){
            loanRepository.deleteById(id);
            return l.orElseThrow();
        }
        return null;
    }
}
