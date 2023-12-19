package com.example.payflow.DTO;

import com.example.payflow.model.AccountNumber;


import java.math.BigDecimal;


public record PhoneTransferDTO(
        String phoneNumber,
        BigDecimal amount,
        Long senderId
) {


}
