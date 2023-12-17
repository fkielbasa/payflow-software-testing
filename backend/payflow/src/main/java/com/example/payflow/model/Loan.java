package com.example.payflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "loan")
public class Loan {
    @Id
    @GeneratedValue
    @Column(name = "id_loan")
    private Long id;
    private BigDecimal amount;

    @Column(name = "start_date")
    private String startDate;

    @Column(name = "end_date")
    private String endDate;

    @Column(name = "interest_rate")
    private BigDecimal interestRate;


    @ManyToOne()
    @JoinColumn(name = "id_account_number")
    private AccountNumber accountNumber;

}
