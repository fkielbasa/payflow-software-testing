package com.example.payflow.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {
    private String apartmentNumber;
    private String city;
    private String country;
    private String houseNumber;
    private String street;
    private String zipCode;

}
