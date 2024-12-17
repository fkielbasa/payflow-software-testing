package com.example.payflow.dto;

import lombok.Builder;

@Builder
public record PhoneTransferDTO(
        String phoneNumber,
        String amount,
        String description,
        Long senderId
) {


}
