package com.example.payflow.dto;

import java.math.BigDecimal;

public record TransferDTO(
        BigDecimal amount,
        String description,
        Long senderAccountId,
        Long receiverAccountId
) {
}
