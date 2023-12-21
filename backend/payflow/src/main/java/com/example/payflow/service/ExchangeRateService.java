package com.example.payflow.service;


import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.CurrencyType;
import com.example.payflow.model.ExchangeRate;
import com.example.payflow.repository.ExchangeRateRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.List;


@AllArgsConstructor
@Service
public class ExchangeRateService {

    private final ExchangeRateRepository repository;


    public List<ExchangeRate> getExchangeRates(int last) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        return repository.findAll()
                .stream()
                .sorted(Comparator.nullsLast((r1, r2) -> {
                    try {
                        return formatter.parse(r2.getDate()).compareTo(formatter.parse(r1.getDate()));
                    } catch (ParseException e) {
                        throw new RuntimeException(e.getMessage());
                    }
                })).limit(last).toList();
    }


    public Double getExchangeRateBetweenCurrency(AccountNumber sender, AccountNumber receiver) {
        double senderCurrency = getExchangeRateByCurrency(sender.getCurrency());
        double receiverCurrency = getExchangeRateByCurrency(receiver.getCurrency());
        return receiverCurrency/senderCurrency;
    }

    public Double getExchangeRateByCurrency(CurrencyType currency){
        ExchangeRate rate = getExchangeRates(1).get(0);
        return switch (currency) {
            case PLN -> rate.getPln();
            case EUR -> rate.getEur();
            case USD -> rate.getUsd();
        };
    }
}
