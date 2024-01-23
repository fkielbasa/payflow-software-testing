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
    @Column(name = "cardId")
    private Long id;
    private String cardNumber;
    private String cvv;
    @Temporal(TemporalType.DATE)
    private LocalDate validDate;
    @OneToOne
    @JoinColumn(name = "id_account_number")
    private AccountNumber accountNumberCard;
    @OneToOne(mappedBy = "idCard",cascade = CascadeType.ALL)
    private CardDetails cardDetails;
}
