package com.example.payflow.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "address"
    )
    @SequenceGenerator(
            name = "address",
            sequenceName = "address_sequence",
            allocationSize = 1
    )
    @Column(name = "id_address")
    private Long id;
    private String street;
    @Column(name = "house_number")
    private String houseNumber;
    @Column(name = "apartment_number")
    private String apartmentNumber;
    @Column(name = "zip_code")
    private String zipCode;
    private String city;
    private String country;

}
