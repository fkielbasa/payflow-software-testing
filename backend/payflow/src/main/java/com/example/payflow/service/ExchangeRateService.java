package com.example.payflow.service;


import com.example.payflow.model.ExchangeRate;
import com.example.payflow.repository.ExchangeRateRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
public class ExchangeRateService {

    private final ExchangeRateRepository repository;

    public List<ExchangeRate> getExchangeRates(int last) {
        return repository.findAllOrderByDateDesc(last);
    }

    public ResponseEntity<ExchangeRate> addExchangeRate(ExchangeRate exchangeRate) {
        repository.save(exchangeRate);
        return ResponseEntity.status(HttpStatus.CREATED).body(exchangeRate);
    }
}
