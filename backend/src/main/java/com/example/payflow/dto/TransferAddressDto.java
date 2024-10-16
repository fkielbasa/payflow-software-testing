package com.example.payflow.dto;

public record TransferAddressDto(
        String country,
        String zipCode,
        String city
) {
}
