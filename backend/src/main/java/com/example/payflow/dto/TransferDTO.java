package com.example.payflow.dto;

import lombok.Builder;

@Builder
public record TransferDTO(
        String amount,
        String description,
        String senderAccountNumber,
        String receiverAccountNumber
) {
}
