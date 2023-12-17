package com.example.payflow.controller;


import com.example.payflow.model.ExchangeRate;
import com.example.payflow.service.ExchangeRateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/exchangeRates")
@RestController
public class ExchangeRateController {

    private final ExchangeRateService service;

    @GetMapping()
    public List<ExchangeRate> getExchangeRates( @RequestParam(required = false, defaultValue = "7") int last){
        return service.getExchangeRates(last);
    }


}
