package com.example.payflow.dto;

public record TransferExchangeDto(
        String fromAccount,
        String toAccount,
        String amount
) {
}
