package com.example.payflow.DTO;

import com.example.payflow.model.AccountNumber;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class PhoneTransferDTO {

    private String phoneNumber;
    private BigDecimal amount;
    private AccountNumber sender;

}
