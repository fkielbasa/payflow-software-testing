package com.example.payflow.dto;

import java.math.BigDecimal;

public record TransferDTO(
        BigDecimal amount,
        Long senderAccountId,
        Long receiverAccountId
) {
}
