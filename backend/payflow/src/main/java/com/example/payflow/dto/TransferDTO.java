package com.example.payflow.dto;

public record TransferDTO(
        String amount,
        String description,
        String senderAccountNumber,
        String receiverAccountNumber
) {
}
