package com.example.payflow.DTO;

import java.math.BigDecimal;

public record TransferDTO(
        BigDecimal amount,
        Long senderAccountId,
        Long receiverAccountId
) {
}
