package com.example.payflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "card")
public class Card {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "card"
    )
    @SequenceGenerator(
            name = "card",
            sequenceName = "card_sequence",
            allocationSize = 1
    )
    private Long id;
    private String cardNumber;
    private String cvv;
    private LocalDate validDate;

    @ManyToOne
    @JoinColumn(name = "id_account_number")
    private AccountNumber accountNumberCard;
}
