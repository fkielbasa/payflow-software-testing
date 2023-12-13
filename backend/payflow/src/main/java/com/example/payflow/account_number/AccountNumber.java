package com.example.payflow.account_number;

import com.example.payflow.user.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
@Data
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
            sequenceName = "user_sequence",
            allocationSize = 1
    )
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
    private User user;
//    @OneToMany(mappedBy = "senderAccount")
//    private List<Transfer> transfersSent;
//    @OneToMany(mappedBy = "receiverAccount")
//    private List<Transfer> transfersReceived;
//    @OneToMany(mappedBy = "accountNumberTransaction")
//    private List<Transaction> accountNumberTransaction;
//    @OneToMany(mappedBy = "accountNumberLoan")
//    private List<Loan> accountNumberLoan;

    public AccountNumber(Long idAccountNumber, BigDecimal balance, Type type, Currency currency, String number, User user) {
        this.id = idAccountNumber;
        this.balance = balance;
        this.type = type;
        this.currency = currency;
        this.number = number;
        this.user = user;
    }
    public AccountNumber(){

    }

    public Long getIdAccountNumber() {
        return id;
    }

    public void setIdAccountNumber(Long idAccountNumber) {
        this.id = idAccountNumber;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
