package com.example.payflow.dto.mapper;

import com.example.payflow.dto.LoanDTO;
import com.example.payflow.model.Loan;
import org.springframework.stereotype.Service;
import java.util.function.Function;

@Service
public class LoanDTOMapper implements Function<Loan, LoanDTO> {
    @Override
    public LoanDTO apply(Loan loan) {
        return new LoanDTO(
                loan.getId(),
                loan.getAmount(),
                loan.getStartDate(),
                loan.getEndDate(),
                loan.getInterestRate(),
                loan.getAccountNumber().getId()
        );
    }
}
