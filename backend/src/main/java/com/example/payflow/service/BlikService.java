package com.example.payflow.service;



import com.example.payflow.model.Blik;
import com.example.payflow.util.NumberGenerator;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
/**
 * Service class responsible for generating and managing BLIK (Quick Response Code for Payments) codes.
 *
 * This service provides a method to retrieve a new BLIK code with an expiration time.
 */
@Service
public class BlikService {

    /**
     * Constant representing the default expiration time for BLIK codes.
     */
    public static final LocalTime BLIK_EXPIRATION_TIME = LocalTime.of(0, 2);

    /**
     * Generates a new BLIK code with the default expiration time.
     *
     * @return Blik object containing the generated code and expiration time.
     */
    public Blik getBlikCode() {
        var blik = Blik.builder()
                .code(NumberGenerator.generateBlikCode())
                .expirationTime(BLIK_EXPIRATION_TIME)
                .build();
        return blik;
    }
}
