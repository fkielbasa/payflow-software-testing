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
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "transaction"
    )
    @SequenceGenerator(
            name = "transaction",
            sequenceName = "transaction_sequence",
            allocationSize = 1
    )
    @Column(name = "id_transaction")
    private Long idTransaction;
    private BigDecimal amount;
    @Temporal(TemporalType.DATE)
    @Column(name = "transaction_date")
    private Date transactionDate;
    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;
    @ManyToOne
    @JoinColumn(name = "id_account_number")
    private AccountNumber accountNumberTransaction;

}
