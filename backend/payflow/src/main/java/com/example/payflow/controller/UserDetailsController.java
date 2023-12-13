package com.example.payflow.controller;

import com.example.payflow.service.UserDetailsServices;
import com.example.payflow.user_details.UserDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class UserDetailsController {

    private final UserDetailsServices userDetailsService;

    public UserDetailsController(UserDetailsServices detailsService) {
        this.userDetailsService = detailsService;
    }


    @GetMapping("/users/details/{id}")
    public ResponseEntity<UserDetails> getUserDetailsById(@PathVariable Long id) {
        UserDetails userDetails = userDetailsService.getUserDetailsById(id);
        return ResponseEntity.ok(userDetails);
    }

}