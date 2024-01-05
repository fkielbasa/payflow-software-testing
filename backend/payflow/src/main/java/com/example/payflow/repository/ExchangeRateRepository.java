package com.example.payflow.repository;

import com.example.payflow.model.ExchangeRate;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Repository
public class ExchangeRateRepository {

    public static final String EXCHANGE_RATES_DB = "E:\\PayFlow\\payflow\\backend\\payflow\\src\\main\\resources\\static\\exchangeRates.json";
    ObjectMapper mapper = new ObjectMapper();

    public List<ExchangeRate> findAll(){
        try {
            ExchangeRate[] rates = mapper.readValue(new File(EXCHANGE_RATES_DB), ExchangeRate[].class);
            return Arrays.stream(rates).toList();
        } catch (IOException e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}

