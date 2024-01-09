package com.example.payflow.dto;

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
