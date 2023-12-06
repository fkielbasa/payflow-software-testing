package com.example.payflow.transaction;

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
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_transaction")
    private Long idTransaction;
    private BigDecimal amount;
    @Column(name = "transaction_date")
    private Date transactionDate;
    @Enumerated(EnumType.STRING)
    private Type type;
    @ManyToOne
    @JoinColumn(name = "id_account_number")
    private AccountNumber accountNumberTransaction;
}
