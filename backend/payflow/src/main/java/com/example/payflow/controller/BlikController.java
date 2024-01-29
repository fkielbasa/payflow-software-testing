package com.example.payflow.controller;


import com.example.payflow.model.Blik;
import com.example.payflow.service.BlikService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 * Controller class responsible for managing operations related to BLIK codes.
 * Provides an endpoint for retrieving a BLIK code.
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/blik")
public class BlikController {

    /**
     * Service for handling BLIK code operations.
     */
    private final BlikService service;

    /**
     * Retrieves a BLIK code using a HTTP GET request.
     *
     * @return {@link Blik} object representing the retrieved BLIK code.
     */
    @GetMapping
    public Blik getBlikCode(){
        return service.getBlikCode();
    }
}
