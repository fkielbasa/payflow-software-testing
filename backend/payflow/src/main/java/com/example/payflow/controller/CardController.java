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
        CardDTO c = cardService.createCard(card).getBody();
        if(card != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(c);
        }
        if (c == null) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error creating card.");
        }
        throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Card information is missing or invalid.");
    }
}
