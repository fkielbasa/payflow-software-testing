package com.example.payflow.DTO.mapper;

import com.example.payflow.dto.CardDTO;
import com.example.payflow.model.Card;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class CardDTOMapper implements Function<Card, CardDTO> {

    @Override
    public CardDTO apply(Card card) {
        return new CardDTO(
                card.getId(),
                card.getCardNumber(),
                card.getValidDate(),
                card.getCvv()
        );
    }
}