package com.example.payflow.service;



import com.example.payflow.model.Blik;
import com.example.payflow.util.NumberGenerator;
import org.springframework.stereotype.Service;

import java.time.LocalTime;

@Service
public class BlikService {

    public static final LocalTime BLIK_EXPIRATION_TIME = LocalTime.of(0, 2);

    public Blik getBlikCode() {
        var blik = Blik.builder()
                .code(NumberGenerator.generateBlikCode())
                .expirationTime(BLIK_EXPIRATION_TIME)
                .build();
        return blik;
    }
}
