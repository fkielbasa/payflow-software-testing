package com.example.payflow.service;


import com.example.payflow.dto.ExchangeRateDto;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.CurrencyType;
import com.example.payflow.model.ExchangeRate;
import com.example.payflow.repository.ExchangeRateRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

/**
 * Service class responsible for managing exchange rates between different currencies.
 *
 * This service provides methods for retrieving exchange rates, calculating exchange rates between currencies,
 * and adding new exchange rates to the system.
 */
@AllArgsConstructor
@Service
public class ExchangeRateService {

    private final ExchangeRateRepository repository;

    /**
     * Retrieves a list of the latest exchange rates.
     *
     * @param last The number of latest exchange rates to retrieve.
     * @return List of ExchangeRate representing the latest exchange rates.
     */
    public List<ExchangeRate> getExchangeRates(int last) {
        return repository
                .findAll()
                .stream()
                .sorted((r1,r2) -> r2.getDate().compareTo(r1.getDate()))
                .limit(last)
                .toList();
    }

    /**
     * Calculates the exchange rate between two currencies based on their AccountNumbers.
     *
     * @param sender   The sender's AccountNumber.
     * @param receiver The receiver's AccountNumber.
     * @return The exchange rate between the sender and receiver currencies.
     */
    public Double getExchangeRateBetweenCurrency(AccountNumber sender, AccountNumber receiver) {
        double senderCurrency = getExchangeRateByCurrency(sender.getCurrency());
        double receiverCurrency = getExchangeRateByCurrency(receiver.getCurrency());
        return receiverCurrency/senderCurrency;
    }

    /**
     * Retrieves the exchange rate for a specific currency.
     *
     * @param currency The CurrencyType for which the exchange rate is to be retrieved.
     * @return The exchange rate for the specified currency.
     */
    public Double getExchangeRateByCurrency(CurrencyType currency){
        ExchangeRate rate = getExchangeRates(1).get(0);
        return switch (currency) {
            case PLN -> rate.getPln();
            case EUR -> rate.getEur();
            case USD -> rate.getUsd();
        };
    }

    /**
     * Adds a new exchange rate to the system.
     *
     * @param rateDto The ExchangeRateDto containing the exchange rates for PLN, EUR, and USD.
     * @return The newly added ExchangeRate.
     */
    public ExchangeRate addNewExchangeRate(ExchangeRateDto rateDto) {
        ExchangeRate exchangeRate =
                ExchangeRate.builder()
                        .date(LocalDate.now())
                        .pln(rateDto.pln())
                        .eur(rateDto.eur())
                        .usd(rateDto.usd())
                        .build();
        return repository.save(exchangeRate);
    }
}
