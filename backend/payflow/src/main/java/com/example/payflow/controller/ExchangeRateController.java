package com.example.payflow.controller;


import com.example.payflow.dto.ExchangeRateDto;
import com.example.payflow.model.ExchangeRate;
import com.example.payflow.service.ExchangeRateService;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.http.parser.HttpParser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/v1/exchange-rates")
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


    @PostMapping
    public ResponseEntity<ExchangeRate> addNewExchangeRate(@RequestBody ExchangeRateDto rateDto){
        ExchangeRate rate = service.addNewExchangeRate(rateDto);
        if (rate != null)
            return ResponseEntity.status(HttpStatus.CREATED).body(rate);
        else
            throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid data");
    }
}
