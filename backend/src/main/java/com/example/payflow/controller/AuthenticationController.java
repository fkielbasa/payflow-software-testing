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
/**
 * Controller class responsible for handling user authentication and registration.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

    /**
     * Service for handling user authentication and registration.
     */
    private final AuthenticationService service;

    /**
     * Registers a new user using a HTTP POST request.
     *
     * @param request RegisterRequest containing user registration details.
     * @return ResponseEntity with AuthenticationRespone if registration is successful, else returns a 406 status.
     * @throws ParseException Thrown if there is an issue parsing the registration data.
     */
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

    /**
     * Authenticates a user using a HTTP POST request.
     *
     * @param request AuthenticationRequest containing user credentials.
     * @return ResponseEntity with AuthenticationRespone if authentication is successful, else returns a 401 status.
     */
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationRespone> authenticate (
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }

}
