package com.example.payflow.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
@Data
public class Blik {

    private Long id;
    private String code;
    private LocalTime expirationTime;
}
