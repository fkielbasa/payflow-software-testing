package com.example.payflow.dto;

import java.math.BigDecimal;


public record PhoneTransferDTO(
        String phoneNumber,
        String amount,
        Long senderId
) {


}
