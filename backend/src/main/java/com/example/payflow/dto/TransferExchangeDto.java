package com.example.payflow.dto;

import lombok.Builder;

@Builder
public record TransferExchangeDto(
        String fromAccount,
        String toAccount,
        String amount
) {
}
