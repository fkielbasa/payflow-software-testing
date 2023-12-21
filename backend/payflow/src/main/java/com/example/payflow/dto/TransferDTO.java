package com.example.payflow.dto;

public record TransferDTO(
        String amount,
        String description,
        Long senderAccountId,
        Long receiverAccountId
) {
}
