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

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class CardController {
    private final CardService cardService;
    @GetMapping("/numbers/{id}/card")
    public ResponseEntity<CardDTO> getCardById(@PathVariable Long id){
        CardDTO card = cardService.getCardByAccountId(id);
        if(card != null) {
            return ResponseEntity.ok().body(card);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    @GetMapping("users/{id}/cards")
    public ResponseEntity<List<CardDTO>> getCardsByUserId(@PathVariable Long id){
        List<CardDTO> cards = cardService.getCardsByUserId(id);
        if(!cards.isEmpty()){
            return ResponseEntity.ok().body(cards);
        }
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    @PostMapping("/numbers/{id}/card")
    public ResponseEntity<CardDTO> createCard(@PathVariable Long id){
        CardDTO c = cardService.createCard(id);
        if(c != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(c);
        }
        return new ResponseEntity("Invalid data or account doesn't exist",HttpStatus.BAD_REQUEST);
    }
    @DeleteMapping("/cards/{id}")
    public ResponseEntity<String> removeCardById(@PathVariable Long id, @RequestParam String pin){
        Card c = cardService.removeCardById(id, pin);
        if (c != null){
            return new ResponseEntity("Card successfully removed", HttpStatus.OK);
        }
        return new ResponseEntity("Card doesn't exist or pin is incorrect",HttpStatus.BAD_REQUEST);
    }
}
