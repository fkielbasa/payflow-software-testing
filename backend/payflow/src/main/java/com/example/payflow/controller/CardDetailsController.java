package com.example.payflow.controller;

import com.example.payflow.dto.CardDetailsDTO;
import com.example.payflow.model.CardDetails;
import com.example.payflow.service.CardDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class CardDetailsController {
    private final CardDetailsService cardDetailsService;

    @PutMapping("/card/{id}/activate")
    public ResponseEntity<CardDetails> activeCard(@PathVariable Long id, @RequestBody CardDetailsDTO cardDetailsDTO){
        return cardDetailsService.activateCard(id,cardDetailsDTO);
    }
}
