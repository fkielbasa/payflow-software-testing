package com.example.payflow.dto;

import java.time.LocalDate;

public record CardDTO(Long id, String cardNumber, LocalDate validDate, String cvv) {
}

