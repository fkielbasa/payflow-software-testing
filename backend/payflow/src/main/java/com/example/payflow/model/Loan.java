package com.example.payflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "loan")
public class Loan {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "loan"
    )
    @SequenceGenerator(
            name = "loan",
            sequenceName = "loan_sequence",
            allocationSize = 1
    )
    @Column(name = "id_loan")
    private Long id;
    private BigDecimal amount;
    @Temporal(TemporalType.DATE)
    @Column(name = "start_date")
    private Date startDate;
    @Temporal(TemporalType.DATE)
    @Column(name = "end_date")
    private Date endDate;
    @Column(name = "interest_rate")
    private BigDecimal interestRate;
    @ManyToOne()
    @JoinColumn(name = "id_account_number")
    private AccountNumber accountNumber;

}
