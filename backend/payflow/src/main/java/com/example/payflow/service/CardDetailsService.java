package com.example.payflow.service;

import com.example.payflow.dto.CardDTO;
import com.example.payflow.dto.PinDTO;
import com.example.payflow.model.CardDetails;
import com.example.payflow.repository.CardDetailsRepository;
import com.example.payflow.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CardDetailsService {
    private final CardDetailsRepository cardDetailsRepository;
    private final CardRepository cardRepository;

    public CardDetails activateCard(Long id, PinDTO pinDTO){
        Optional<CardDetails> card = cardDetailsRepository.findById(id);
        if (card.isPresent() && checkCardIdExist(id)) {
            CardDetails cd = card.get();
            cd.setActive(true);
            cd.setPin(pinDTO.getPin());
            cardDetailsRepository.save(cd);
            return cd;
        }
        return null;
    }
    public CardDetails blockCard(Long id){
        Optional<CardDetails> card = cardDetailsRepository.findById(id);
        if(card.isPresent() && checkCardIdExist(id)){
            CardDetails cd = card.get();
            cd.setBlocked(true);
            cardDetailsRepository.save(cd);
            return cd;
        }
        return null;
    }
    public CardDetails unblockCard(Long id) {
        Optional<CardDetails> card = cardDetailsRepository.findById(id);
        if(card.isPresent() && checkCardIdExist(id)){
            CardDetails cd = card.get();
            cd.setBlocked(false);
            cardDetailsRepository.save(cd);
            return cd;
        }
        return null;
    }
    public PinDTO changePin(Long id, PinDTO pin) {
        Optional<CardDetails> card = cardDetailsRepository.findById(id);
        if (card.isPresent() && checkCardIdExist(id)) {
            CardDetails cd = card.get();
            if(cd.isActive()) {
                cd.setPin(pin.getPin());
                cardDetailsRepository.save(cd);
                return pin;
            }
        }
        return null;
    }
    public boolean checkCardIdExist(Long id){
        return cardRepository.existsById(id);
    }
}
