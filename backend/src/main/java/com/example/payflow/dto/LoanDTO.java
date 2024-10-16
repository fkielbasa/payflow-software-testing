package com.example.payflow.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;


@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class LoanDTO {
    private Long id;
    private BigDecimal amount;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate startDate;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate endDate;
    private BigDecimal interestRate;
    private Long idAccountNumber;
}
