package com.example.payflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "exchange_rates")
public class ExchangeRate {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "exchange_rates"
    )
    @SequenceGenerator(
            name = "exchange_rates",
            sequenceName = "exchange_rates_sequence",
            allocationSize = 1
    )
    private Long id;
    private LocalDate date;
    @Column(name = "PLN")
    private Double pln;
    @Column(name = "EUR")
    private Double eur;
    @Column(name = "USD")
    private Double usd;

    @OneToOne
    private AccountNumber accountNumber;

}
