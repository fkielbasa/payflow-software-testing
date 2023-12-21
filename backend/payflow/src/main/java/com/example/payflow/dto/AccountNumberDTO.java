package com.example.payflow.dto;

import com.example.payflow.model.AccountNumberType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class AccountNumberDTO {
    private Long id;
    private BigDecimal balance;
    private AccountNumberType accountNumberType;
    private String number;
}
