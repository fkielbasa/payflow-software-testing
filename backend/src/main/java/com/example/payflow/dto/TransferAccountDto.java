package com.example.payflow.dto;

import lombok.Builder;

@Builder
public record TransferAccountDto(
        Long id,
        String firstName,
        String lastName,
        String accountNumber,

        TransferAddressDto address
) {
}
