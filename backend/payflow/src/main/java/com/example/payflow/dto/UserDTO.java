package com.example.payflow.dto;

import com.example.payflow.model.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserDTO{
    private Long id;
    private String firstName;
    private String lastName;
    private String nationality;
    private Date dateOfBirth;
    private String login;
    private String email;
    private String phoneNumber;
    private Address correspondenceAddress;
    private Address residentialAddress;
}



