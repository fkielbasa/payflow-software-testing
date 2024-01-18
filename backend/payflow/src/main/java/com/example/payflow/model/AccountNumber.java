package com.example.payflow.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Entity
@Table(name = "account_number")
public class AccountNumber {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "account_number"
    )
    @SequenceGenerator(
            name = "account_number",
            sequenceName = "account_number_sequence",
            allocationSize = 1
    )
    @Column(name = "id_account_number")
    private Long id;
    private BigDecimal balance;
    @Enumerated(EnumType.STRING)
    private AccountNumberType accountType;
    @Enumerated(EnumType.STRING)
    private CurrencyType currency;
    private String number;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;

    @OneToMany(mappedBy = "accountNumber",cascade = CascadeType.ALL)
    private List<Loan> loans;

    @OneToMany(mappedBy = "accountNumberCard")
    private List<Card> cards;
}
