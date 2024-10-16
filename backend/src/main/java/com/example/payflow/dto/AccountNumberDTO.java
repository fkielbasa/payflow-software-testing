package com.example.payflow.dto;

import com.example.payflow.model.AccountNumberType;
import com.example.payflow.model.CurrencyType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

public record AccountNumberDTO(
        Long id,
        BigDecimal balance,
        CurrencyType currency,
        AccountNumberType accountNumberType,
        String number
) {

}
