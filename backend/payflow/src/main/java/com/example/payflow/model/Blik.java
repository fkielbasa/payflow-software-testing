package com.example.payflow.model;


import lombok.*;

import java.time.LocalTime;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
@Builder
public class Blik {

    private String code;
    private LocalTime expirationTime;
}
