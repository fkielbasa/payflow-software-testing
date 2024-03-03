package com.example.payflow.dto;

import com.example.payflow.model.Address;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserDTO{
    private Long id;
    private String firstName;
    private String lastName;
    private String nationality;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate dateOfBirth;
    private String login;
    private String email;
    private String phoneNumber;
    private Address residentialAddress;
    private Address correspondenceAddress;
}



