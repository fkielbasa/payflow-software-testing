package com.example.payflow.controller;


import com.example.payflow.model.ExchangeRate;
import com.example.payflow.service.ExchangeRateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/exchangerates")
@RestController
public class ExchangeRateController {

    private final ExchangeRateService service;

    @GetMapping
    public ResponseEntity<List<ExchangeRate>> getExchangeRates(@RequestParam(required = false, defaultValue = "7") int last){
        List<ExchangeRate> rates = service.getExchangeRates(last);
        if (rates == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else if (rates.isEmpty())
            return new ResponseEntity<>(rates, HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<>(rates, HttpStatus.OK);
    }

}
