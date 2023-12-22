package com.example.payflow.service;

import com.example.payflow.dto.CardDetailsDTO;
import com.example.payflow.model.CardDetails;
import com.example.payflow.repository.CardDetailsRepository;
import com.example.payflow.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CardDetailsService {
    private final CardDetailsRepository cardDetailsRepository;
    private final CardRepository cardRepository;

    public ResponseEntity<CardDetails> activateCard(Long id,CardDetailsDTO cardDetailsDTO){
        Optional<CardDetails> cardDetails = cardDetailsRepository.findById(id);
        if (cardDetails.isPresent()) {
            CardDetails cd = cardDetails.get();
            cd.setActive(true);
            cd.setPin(cardDetailsDTO.getPin());
            cardDetailsRepository.save(cd);
            return ResponseEntity.ok().body(cd);
        }
        return (ResponseEntity<CardDetails>) ResponseEntity.badRequest();
    }
}
