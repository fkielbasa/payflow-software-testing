package com.example.payflow.service;

import com.example.payflow.dto.CardDTO;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.Card;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@RequiredArgsConstructor
@Service
public class CardService {
    private final CardRepository cardRepository;
    private final AccountNumberRepository accountNumberRepository;

//    public List<CardDTO> getCardByAccountId(Long id){
//        return cardRepository.findAll().stream()
//                .map(card -> new CardDTO(card.getId(),card.getCardNumber(),card.getValidDate(),card.getCvv()))
//                .filter(c -> c.getAccountNumberCard().getId().equals(id))
//                .toList();
//    }
    public List<CardDTO> getCardByAccountId(Long id){
        return cardRepository.findAll().stream()
                .filter(card -> card.getAccountNumberCard().getId().equals(id))
                .map(card -> new CardDTO(card.getAccountNumberCard().getId(), card.getCardNumber(), card.getValidDate(), card.getCvv()))
                .toList();
    }
    public ResponseEntity<Card> addCard(Card card){
        LocalDate currentDate = LocalDate.now();
        Optional<AccountNumber> ac = accountNumberRepository.findById(card.getAccountNumberCard().getId());
        if (ac.isPresent()) {
            var c = Card.builder()
                    .validDate(currentDate.plusYears(4))
                    .cardNumber(generateUniqueCardNumber())
                    .cvv(card.getCvv())
                    .accountNumberCard(ac.orElseThrow())
                    .build();
            cardRepository.save(c);
            return ResponseEntity.ok(c);
        }
        return (ResponseEntity<Card>) ResponseEntity.badRequest();
    }
    public boolean isCardNumberValid(String cardNumber){
        return !accountNumberRepository.existsByNumber(cardNumber);
    }
    public String generateUniqueCardNumber() {
        String cardNumber;
        do {
            cardNumber = generateRandom();
        } while (!isCardNumberValid(cardNumber));
        return cardNumber;
    }
    public String generateRandom() {
        Random random;
        random = new Random();
        StringBuilder stringBuilder = new StringBuilder();

        for (int i = 0; i < 16; i++) {
            int randomNumber = random.nextInt(10);
            stringBuilder.append(randomNumber);
        }
        return stringBuilder.toString();
    }
}

