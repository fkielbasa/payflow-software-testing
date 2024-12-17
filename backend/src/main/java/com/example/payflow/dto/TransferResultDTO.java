package com.example.payflow.dto;

import lombok.Builder;

@Builder
public record TransferResultDTO(
        Long id,
        String date,
        String amount,
        String currency,
        String description,
        Long senderAccountId,
        String senderFullName,
        Long receiverAccountId,
        String receiverFullName
) {

}
