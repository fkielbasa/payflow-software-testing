package com.example.payflow.dto;

import lombok.Builder;

@Builder
public record TransferDetailsResultDto(
        Long id,
        String date,
        String amount,
        String currency,
        String description,
        TransferAccountDto sender,
        TransferAccountDto receiver
) {

}
