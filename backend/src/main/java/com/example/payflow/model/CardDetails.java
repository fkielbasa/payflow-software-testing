package com.example.payflow.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CardDetails {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "cardDetails"
    )
    @SequenceGenerator(
            name = "cardDetails",
            sequenceName = "cardDetails_sequence",
            allocationSize = 1
    )
    private Long id;
    private boolean active;
    private boolean blocked;
    @Column(length = 4)
    private String pin;
    @OneToOne
    @JoinColumn(name = "cardId")
    private Card idCard;
}