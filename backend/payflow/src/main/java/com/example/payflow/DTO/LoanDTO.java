package com.example.payflow.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class LoanDTO {
    private BigDecimal amount;
    private Date startDate;
    private Date endDate;
    private BigDecimal interestRate;
    private Long id;
}
