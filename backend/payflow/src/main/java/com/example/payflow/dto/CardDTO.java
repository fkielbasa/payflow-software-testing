package com.example.payflow.dto;

import lombok.*;

import java.time.LocalDate;
@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class CardDTO {
    private Long id;
    private String cardNumber;
    private LocalDate validDate;
    private String cvv;
    private boolean isActive;
    private boolean isBlocked;
}