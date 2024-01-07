package com.example.payflow.controller;

import com.example.payflow.dto.CardDTO;
import com.example.payflow.dto.CardDetailsDTO;
import com.example.payflow.model.CardDetails;
import com.example.payflow.service.CardDetailsService;
import com.example.payflow.service.CardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class CardDetailsController {
    private final CardDetailsService cardDetailsService;
    private final CardService cardService;

    @PatchMapping("/card/{id}/activate")
    public ResponseEntity<CardDetails> activeCard(@PathVariable Long id, @RequestBody CardDetailsDTO card){
        if(card != null){
            if(cardService.checkCardIdExist(id)){
                cardDetailsService.activateCard(id,card);
                return new ResponseEntity(HttpStatus.NO_CONTENT);
            }
        }
        return new ResponseEntity("Incorrect body or card doesn't exist.",HttpStatus.BAD_REQUEST);
    }
    @PatchMapping("/card/{id}/block")
    public ResponseEntity<CardDetails> blockCard(@PathVariable Long id){
        return null;
    }
    @PatchMapping("/card/{id}/unblock")
    public ResponseEntity<CardDetails> unblockCard(@PathVariable Long id){
        return null;
    }

}
