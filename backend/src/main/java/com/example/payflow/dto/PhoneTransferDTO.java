package com.example.payflow.dto;

public record PhoneTransferDTO(
        String phoneNumber,
        String amount,
        String description,
        Long senderId
) {


}
