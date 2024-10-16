package com.example.payflow.service;

import com.example.payflow.dto.CardDTO;
import com.example.payflow.dto.PinDTO;
import com.example.payflow.model.Card;
import com.example.payflow.model.CardDetails;
import com.example.payflow.repository.CardDetailsRepository;
import com.example.payflow.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
/**
 * Service class responsible for handling operations related to card details, such as activation, blocking, unblocking, and changing PIN.
 *
 * This service provides methods for managing the details of a payment card, including activation, blocking, unblocking, and changing the PIN.
 */
@RequiredArgsConstructor
@Service
public class CardDetailsService {

    private final CardDetailsRepository cardDetailsRepository;
    private final CardRepository cardRepository;

    /**
     * Activates a card by updating its details with the provided PIN.
     *
     * @param id     The ID of the card to be activated.
     * @param pinDTO The PIN provided for card activation.
     * @return CardDetails entity representing the activated card details, or null if the card with the given ID is not found.
     */
    public CardDetails activateCard(Long id, PinDTO pinDTO){
        Optional<Card> card = cardRepository.findById(id);
        if (card.isPresent()) {
            CardDetails cd = card.get().getCardDetails();
            cd.setActive(true);
            cd.setPin(pinDTO.getPin());
            cardDetailsRepository.save(cd);
            return cd;
        }
        return null;
    }

    /**
     * Blocks a card by updating its details.
     *
     * @param id The ID of the card to be blocked.
     * @return CardDetails entity representing the blocked card details, or null if the card with the given ID is not found.
     */

    public CardDetails blockCard(Long id){
        Optional<Card> card = cardRepository.findById(id);
        if (card.isPresent()) {
            CardDetails cd = card.get().getCardDetails();
            cd.setBlocked(true);
            cardDetailsRepository.save(cd);
            return cd;
        }
        return null;
    }

    /**
     * Unblocks a card by updating its details.
     *
     * @param id The ID of the card to be unblocked.
     * @return CardDetails entity representing the unblocked card details, or null if the card with the given ID is not found.
     */
    public CardDetails unblockCard(Long id) {
        Optional<Card> card = cardRepository.findById(id);
        if (card.isPresent()) {
            CardDetails cd = card.get().getCardDetails();
            cd.setBlocked(false);
            cardDetailsRepository.save(cd);
            return cd;
        }
        return null;
    }

    /**
     * Changes the PIN of an active card by updating its details.
     *
     * @param id  The ID of the card for which the PIN needs to be changed.
     * @param pin The new PIN provided for the card.
     * @return PinDTO representing the changed PIN, or null if the card with the given ID is not found or is inactive.
     */
    public PinDTO changePin(Long id, PinDTO pin) {
        Optional<Card> card = cardRepository.findById(id);
        if (card.isPresent()) {
            CardDetails cd = card.get().getCardDetails();
            if(cd.isActive()) {
                cd.setPin(pin.getPin());
                cardDetailsRepository.save(cd);
                return pin;
            }
        }
        return null;
    }
}
