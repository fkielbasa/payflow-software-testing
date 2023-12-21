package com.example.payflow.dto;

import java.math.BigDecimal;

public record TransferDTO(
        String amount,
        String description,
        Long senderAccountId,
        Long receiverAccountId
) {
}
