package com.example.payflow.account_number;

import com.example.payflow.loan.Loan;
import com.example.payflow.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

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
    private Type type;
    @Enumerated(EnumType.STRING)
    private Currency currency;
    private String number;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User userId;

    @OneToMany(mappedBy = "accountNumberLoan",
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
    private List<Loan> loans = new ArrayList<>();
}
