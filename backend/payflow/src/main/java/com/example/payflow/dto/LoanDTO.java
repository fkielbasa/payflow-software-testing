package com.example.payflow.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class LoanDTO {
    private Long id;
    @NonNull
    private BigDecimal amount;
    @JsonFormat(pattern="yyyy-MM-dd")
    @NonNull
    private LocalDate startDate;
    @JsonFormat(pattern="yyyy-MM-dd")
    @NonNull
    private LocalDate endDate;
    @NonNull
    private BigDecimal interestRate;
    private Long idAccountNumber;
}
