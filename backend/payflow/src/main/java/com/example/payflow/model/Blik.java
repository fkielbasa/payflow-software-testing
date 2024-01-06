package com.example.payflow.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalTime;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
@Builder
public class Blik {

    private String code;
    @JsonFormat(pattern="HH:mm:ss")
    private LocalTime expirationTime;
}
