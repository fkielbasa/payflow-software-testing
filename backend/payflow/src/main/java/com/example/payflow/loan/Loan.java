package com.example.payflow.loan;

import com.example.payflow.account_number.AccountNumber;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;
@Data
@Builder
@AllArgsConstructor
@Entity
@Table(name = "loan")
public class Loan {
    @Id
    @GeneratedValue
    @Column(name = "id_loan")
    private Long id;
    private BigDecimal amount;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "interest_rate")
    private BigDecimal interestRate;

    @ManyToOne
    @JoinColumn(name = "id_account_number")
    private AccountNumber accountNumberLoan;

    public Loan(){

    }

}
