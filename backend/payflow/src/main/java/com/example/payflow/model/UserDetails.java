package com.example.payflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_details")
public class UserDetails {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_details"
    )
    @SequenceGenerator(
            name = "user_details",
            sequenceName = "user_details_sequence",
            allocationSize = 1
    )
    @Column(name = "id_user_details")
    private Long id;
    private String email;
    @Column(name = "phone_number")
    private String phoneNumber;
    @MapsId
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User userId;
}
