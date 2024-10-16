package com.example.payflow.service;

import com.example.payflow.dto.CardDTO;
import com.example.payflow.dto.PinDTO;
import com.example.payflow.dto.mapper.CardDTOMapper;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.Card;
import com.example.payflow.model.CardDetails;
import com.example.payflow.model.User;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.CardDetailsRepository;
import com.example.payflow.repository.CardRepository;
import com.example.payflow.repository.UserRepository;
import com.example.payflow.util.NumberGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.sound.midi.SysexMessage;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
/**
 * Service class responsible for handling operations related to payment cards, including retrieval, creation, and removal.
 *
 * This service provides methods for retrieving card information, creating new cards, and removing existing cards.
 */
@RequiredArgsConstructor
@Service
public class CardService {

    private final CardRepository cardRepository;
    private final AccountNumberRepository accountNumberRepository;
    private final CardDetailsRepository cardDetailsRepository;
    private final UserRepository userRepository;
    private final CardDTOMapper cardDTOMapper;

    /**
     * Retrieves card information by the account ID.
     *
     * @param id The ID of the account for which card information is to be retrieved.
     * @return CardDTO representing the card information, or null if the account with the given ID is not found or has no associated card.
     */
    public CardDTO getCardByAccountId(Long id){
        return cardDTOMapper.apply(accountNumberRepository.findById(id).get().getCard());
    }

    /**
     * Retrieves a list of card information associated with a user ID.
     *
     * @param userId The ID of the user for whom card information is to be retrieved.
     * @return List of CardDTO representing the card information associated with the user, or an empty list if the user with the given ID is not found or has no associated cards.
     */

    public List<CardDTO> getCardsByUserId(Long userId) {
        return userRepository.findById(userId)
                .map(User::getAccountNumbers)
                .stream()
                .flatMap(List::stream)
                .map(AccountNumber::getCard)
                .filter(Objects::nonNull)
                .map(cardDTOMapper)
                .toList();
    }

    /**
     * Creates a new card for the specified account ID.
     *
     * @param id The ID of the account for which a new card is to be created.
     * @return CardDTO representing the newly created card, or null if the account with the given ID is not found.
     */
    public CardDTO createCard(Long id){
        LocalDate currentDate = LocalDate.now();
        Optional<AccountNumber> ac = accountNumberRepository.findById(id);
        if (ac.isPresent()) {
            var c = Card.builder()
                    .validDate(currentDate.plusYears(4))
                    .cardNumber(NumberGenerator.generateCardNumber())
                    .cvv(NumberGenerator.generateCVV())
                    .accountNumberCard(ac.orElseThrow())
                    .build();
            var cd = CardDetails.builder()
                    .active(false)
                    .blocked(false)
                    .idCard(c)
                    .pin(null)
                    .build();
            c.setCardDetails(cd);
            cardRepository.save(c);
            cardDetailsRepository.save(cd);
            CardDTO cardDTO = cardDTOMapper.apply(c);
            return cardDTO;
        }
        return null;
    }

    /**
     * Removes an existing card by its ID and PIN.
     *
     * @param id  The ID of the card to be removed.
     * @param pin The PIN associated with the card for validation.
     * @return Card entity representing the removed card, or null if the card with the given ID is not found or the provided PIN is incorrect.
     */
    public Card removeCardById(Long id, String pin) {
        Optional<Card> c = cardRepository.findById(id);
        if(c.isPresent() && c.get().getCardDetails().getPin().equals(pin)){
            cardRepository.deleteById(id);
            return c.orElseThrow();
        }
        return null;
    }
}
