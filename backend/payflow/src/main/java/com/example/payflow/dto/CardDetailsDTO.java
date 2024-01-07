package com.example.payflow.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CardDetailsDTO {
    @Valid
    @Size(min = 4, max = 4, message = "Pin must be exactly 4 characters long")
    private String pin;
}