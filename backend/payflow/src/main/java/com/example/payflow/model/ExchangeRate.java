package com.example.payflow.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class ExchangeRate {

    private Long id;
    private String date;
    private Double pln;
    private Double eur;
    private Double usd;

}
