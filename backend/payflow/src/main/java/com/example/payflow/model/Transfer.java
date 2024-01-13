package com.example.payflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "transfer")
public class Transfer {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "transfer"
    )
    @SequenceGenerator(
            name = "transfer",
            sequenceName = "transfer_sequence",
            allocationSize = 1
    )
    @Column(name = "id_transfer")
    private Long id;
    @Temporal(TemporalType.DATE)
    @Column(name = "transfer_date")
    private LocalDate transferDate;

    private BigDecimal amount;
    private String description;

    @ManyToOne
    @JoinColumn(name = "sender_number")
    private AccountNumber senderAccount;

    @ManyToOne
    @JoinColumn(name = "receiver_number")
    private AccountNumber receiverAccount;

}
