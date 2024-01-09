package com.example.payflow.dto;

public record TransferAccountDto(
        Long id,
        String firstName,
        String lastName,
        String accountNumber,

        TransferAddressDto address
) {
}
