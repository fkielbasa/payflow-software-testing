package com.example.payflow.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate validDate;
    @NonNull
    private String cvv;
    private boolean isActive;
    private boolean isBlocked;
}
