package com.example.payflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Entity
@Table(name = "account_number")
public class AccountNumber {
    @Id
    @GeneratedValue
    @Column(name = "id_account_number")
    private Long id;
    private BigDecimal balance;
    @Enumerated(EnumType.STRING)
    private AccountNumberType accountNumberType;
    @Enumerated(EnumType.STRING)
    private CurrencyType currencyType;
    private String number;

//    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;


}
