package com.example.payflow.controller;


import com.example.payflow.security.AuthenticationRequest;
import com.example.payflow.security.AuthenticationRespone;
import com.example.payflow.security.AuthenticationService;
import com.example.payflow.security.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationRespone> register (
            @RequestBody RegisterRequest request
    ) throws ParseException {
        AuthenticationRespone auth = service.register(request);
        if (auth != null)
            return ResponseEntity.ok(auth);
        else
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationRespone> authenticate (
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }

}
