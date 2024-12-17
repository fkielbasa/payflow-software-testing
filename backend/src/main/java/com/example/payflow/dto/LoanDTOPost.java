package com.example.payflow.dto;

import com.example.payflow.model.AccountNumber;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class LoanDTOPost {
    private BigDecimal amount;
    private LocalDate endDate;
    private BigDecimal interestRate;
}
