package com.example.payflow.dto.mapper;

import com.example.payflow.dto.CardDTO;
import com.example.payflow.model.Card;
import org.springframework.stereotype.Service;

import java.util.function.Function;
/**
 * Service class responsible for mapping a Card entity to a CardDTO.
 *
 * This class implements the Function interface for functional mapping.
 */
@Service
public class CardDTOMapper implements Function<Card, CardDTO> {

    /**
     * Maps a Card entity to a CardDTO.
     *
     * @param card The Card entity to be mapped.
     * @return CardDTO containing essential details about the card.
     */
    @Override
    public CardDTO apply(Card card) {
        return new CardDTO(
                card.getId(),
                card.getCardNumber(),
                card.getValidDate(),
                card.getCvv(),
                card.getCardDetails().isActive(),
                card.getCardDetails().isBlocked(),
                card.getAccountNumberCard().getUserId().getFirstName() + ' ' + card.getAccountNumberCard().getUserId().getLastName(),
                card.getAccountNumberCard().getBalance(),
                card.getAccountNumberCard().getCurrency(),
                card.getAccountNumberCard().getId()
        );
    }
}
