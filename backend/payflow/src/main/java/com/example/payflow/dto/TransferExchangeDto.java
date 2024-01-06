package com.example.payflow.dto;

public record TransferExchangeDto(
        Long fromAccount,
        Long toAccount,
        String amount
) {
}
