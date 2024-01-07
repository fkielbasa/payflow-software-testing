package com.example.payflow.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Entity
@Table(name = "exchange_rate")
public class ExchangeRate {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "exchange_rate"
    )
    @SequenceGenerator(
            name = "exchange_rate",
            sequenceName = "exchange_rate_sequence",
            allocationSize = 1
    )
    private Long id;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    private Double pln;
    private Double eur;
    private Double usd;

}
