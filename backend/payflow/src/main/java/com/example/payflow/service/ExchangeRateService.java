package com.example.payflow.service;


import com.example.payflow.model.ExchangeRate;
import com.example.payflow.repository.ExchangeRateRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
public class ExchangeRateService {

    private final ExchangeRateRepository repository;

    public List<ExchangeRate> getExchangeRates(int last) {
        return repository.findAllOrderByDateDesc(last);
    }
}
