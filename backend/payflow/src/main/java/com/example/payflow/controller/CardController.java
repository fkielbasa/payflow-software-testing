package com.example.payflow.controller;

import com.example.payflow.dto.CardDTO;
import com.example.payflow.dto.CardDTOPost;
import com.example.payflow.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class CardController {
    private final CardService cardService;
    @GetMapping("/numbers/{id}/cards")
    public ResponseEntity<List<CardDTO>> getCardById(@PathVariable Long id){
        List<CardDTO> card = cardService.getCardByAccountId(id);
        if(card == null || card.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok().body(card);
    }
    @PostMapping("/card")
    public ResponseEntity<CardDTO> createCard(@RequestBody CardDTOPost card){
        if(card.getAccountId() != null) {
            if (cardService.checkIfAccountByIdExist(card.getAccountId())) {
                CardDTO cardDTO = cardService.createCard(card);
                return ResponseEntity.status(HttpStatus.CREATED).body(cardDTO);
            }
        }
        return new ResponseEntity("Invalid data or account doesn't exist",HttpStatus.BAD_REQUEST);
    }
    @DeleteMapping("card/{id}")
    public ResponseEntity<String> deleteCardById(@PathVariable Long id){
        if(id != null) {
            if (cardService.checkCardIdExist(id)) {
                cardService.deleteCardById(id);
                return new ResponseEntity("Card successfully deleted", HttpStatus.OK);
            }
        }
        return new ResponseEntity("Invalid data or card doesn't exist",HttpStatus.BAD_REQUEST);
    }
}
