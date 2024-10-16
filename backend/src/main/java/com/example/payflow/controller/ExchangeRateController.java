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
/**
 * Controller class responsible for managing operations related to exchange rates.
 */
@RequiredArgsConstructor
@RequestMapping("/api/v1/exchange-rates")
@RestController
public class ExchangeRateController {

    /**
     * Service for handling exchange rate operations.
     */
    private final ExchangeRateService service;

    /**
     * Retrieves a list of exchange rates using a HTTP GET request.
     *
     * @param last Number of most recent exchange rates to retrieve (default is 7).
     * @return ResponseEntity with a list of {@link ExchangeRate} objects if found, else returns a 404 or 204 status.
     */
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

    /**
     * Adds a new exchange rate using a HTTP POST request.
     *
     * @param rateDto ExchangeRateDto containing the details of the new exchange rate.
     * @return ResponseEntity with the added {@link ExchangeRate} if successful, else returns a 400 status.
     * @throws ResponseStatusException Thrown if the data is invalid.
     */
    @PostMapping
    public ResponseEntity<ExchangeRate> addNewExchangeRate(@RequestBody ExchangeRateDto rateDto){
        ExchangeRate rate = service.addNewExchangeRate(rateDto);
        if (rate != null)
            return ResponseEntity.status(HttpStatus.CREATED).body(rate);
        else
            throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid data");
    }
}
