package com.example.payflow.dto;

public record TransferResultDTO(
        Long id,
        String date,
        String amount,
        String description,
        Long senderAccountId,
        String senderFullName,
        Long receiverAccountId,
        String receiverFullName
) {

}
