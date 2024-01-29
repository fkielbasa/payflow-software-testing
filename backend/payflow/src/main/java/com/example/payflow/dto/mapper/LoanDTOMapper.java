package com.example.payflow.dto.mapper;

import com.example.payflow.dto.LoanDTO;
import com.example.payflow.model.Loan;
import org.springframework.stereotype.Service;
import java.util.function.Function;
/**
 * Service class responsible for mapping a Loan entity to a LoanDTO.
 *
 * This class implements the Function interface for functional mapping.
 */
@Service
public class LoanDTOMapper implements Function<Loan, LoanDTO> {

    /**
     * Maps a Loan entity to a LoanDTO.
     *
     * @param loan The Loan entity to be mapped.
     * @return LoanDTO containing essential details about the loan.
     */
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
