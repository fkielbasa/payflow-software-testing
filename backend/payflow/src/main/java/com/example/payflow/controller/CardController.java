package com.example.payflow.controller;

import com.example.payflow.dto.CardDTO;
import com.example.payflow.model.Card;
import com.example.payflow.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class CardController {
    private final CardService cardService;
    @GetMapping("/account_number/{id}/cards")
    public ResponseEntity<List<CardDTO>> getCardById(@PathVariable Long id){
        List<CardDTO> card = cardService.getCardByAccountId(id);
        return ResponseEntity.ok(card);
    }
    @PostMapping("/card/add")
    public ResponseEntity<Card> addCard(@RequestBody Card card){
        return cardService.addCard(card);
    }
}
