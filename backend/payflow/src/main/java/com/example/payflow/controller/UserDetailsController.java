package com.example.payflow.controller;

import com.example.payflow.service.UserDetailsServices;
import com.example.payflow.user_details.UserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserDetailsController {

    private final UserDetailsServices userDetailsService;

    @GetMapping("/users/{id}/details")
    public ResponseEntity<UserDetails> getUserDetailsById(@PathVariable Long id) {
        UserDetails userDetails = userDetailsService.getUserDetailsById(id);
        return ResponseEntity.ok(userDetails);
    }

}