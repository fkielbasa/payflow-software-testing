package com.example.payflow.dto;

import com.example.payflow.model.AccountNumberType;
import com.example.payflow.model.CurrencyType;

public record AccountNumberRequestDto(
        Long userId,
        CurrencyType currency,
        AccountNumberType accountType
) {
}
