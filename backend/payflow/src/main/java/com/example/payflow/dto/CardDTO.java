package com.example.payflow.dto;

import lombok.*;

import java.time.LocalDate;
@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class CardDTO {
    @NonNull
    private Long id;
    @NonNull
    private String cardNumber;
    @NonNull
    private LocalDate validDate;
    @NonNull
    private String cvv;
    private boolean isActive;
    private boolean isBlocked;
}