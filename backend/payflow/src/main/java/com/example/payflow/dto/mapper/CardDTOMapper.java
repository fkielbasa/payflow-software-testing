package com.example.payflow.dto.mapper;

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
                card.getCvv(),
                card.getCardDetails().isActive(),
                card.getCardDetails().isBlocked(),
                card.getAccountNumberCard().getUserId().getFirstName() + ' ' + card.getAccountNumberCard().getUserId().getLastName()
        );
    }
}
