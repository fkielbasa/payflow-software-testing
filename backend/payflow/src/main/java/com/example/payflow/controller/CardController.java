package com.example.payflow.controller;

import com.example.payflow.dto.CardDTO;
import com.example.payflow.dto.PinDTO;
import com.example.payflow.model.Card;
import com.example.payflow.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * Controller class responsible for managing operations related to user cards.
 * Provides endpoints for retrieving, creating, and removing user cards.
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class CardController {

    /**
     * Service for handling card operations.
     */
    private final CardService cardService;

    /**
     * Retrieves a card by account ID using a HTTP GET request.
     *
     * @param id Account ID for which to retrieve the card.
     * @return ResponseEntity with CardDTO if a card is found, else returns a 204 status.
     */
    @GetMapping("/numbers/{id}/card")
    public ResponseEntity<CardDTO> getCardById(@PathVariable Long id){
        CardDTO card = cardService.getCardByAccountId(id);
        if(card != null) {
            return ResponseEntity.ok().body(card);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    /**
     * Retrieves a list of cards by user ID using a HTTP GET request.
     *
     * @param id User ID for whom to retrieve cards.
     * @return ResponseEntity with a List of CardDTOs if cards are found, else returns a 204 status.
     */
    @GetMapping("users/{id}/cards")
    public ResponseEntity<List<CardDTO>> getCardsByUserId(@PathVariable Long id){
        List<CardDTO> cards = cardService.getCardsByUserId(id);
        if(!cards.isEmpty()){
            return ResponseEntity.ok().body(cards);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    /**
     * Creates a new card for an account using a HTTP POST request.
     *
     * @param id Account ID for which to create the card.
     * @return ResponseEntity with CardDTO if the card is successfully created, else returns a 400 status.
     */
    @PostMapping("/numbers/{id}/card")
    public ResponseEntity<CardDTO> createCard(@PathVariable Long id){
        CardDTO c = cardService.createCard(id);
        if(c != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(c);
        }
        return new ResponseEntity("Invalid data or account doesn't exist",HttpStatus.BAD_REQUEST);
    }

    /**
     * Removes a card by ID using a HTTP DELETE request.
     *
     * @param id  Card ID to remove.
     * @param pin PIN for verification.
     * @return ResponseEntity with a success message if the card is successfully removed, else returns a 400 status.
     */
    @DeleteMapping("/cards/{id}")
    public ResponseEntity<String> removeCardById(@PathVariable Long id, @RequestParam String pin){
        Card c = cardService.removeCardById(id, pin);
        if (c != null){
            return new ResponseEntity("Card successfully removed", HttpStatus.OK);
        }
        return new ResponseEntity("Card doesn't exist or pin is incorrect",HttpStatus.BAD_REQUEST);
    }
}
