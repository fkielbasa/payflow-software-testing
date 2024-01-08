package com.example.payflow.controller;

import com.example.payflow.dto.PinDTO;
import com.example.payflow.model.CardDetails;
import com.example.payflow.service.CardDetailsService;
import com.example.payflow.service.CardService;
import jakarta.validation.Valid;
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
    public ResponseEntity<?> activeCard(@PathVariable Long id,@Valid @RequestBody PinDTO pin){
        CardDetails cd = cardDetailsService.activateCard(id, pin);
        if(cd != null){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity("Incorrect body or card doesn't exist.",HttpStatus.BAD_REQUEST);
    }
    @PatchMapping("/card/{id}/block")
    public ResponseEntity<?> blockCard(@PathVariable Long id){
        CardDetails cd = cardDetailsService.blockCard(id);
        if(cd != null){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity("Incorrect body or card doesn't exist.",HttpStatus.BAD_REQUEST);
    }
    @PatchMapping("/card/{id}/unblock")
    public ResponseEntity<?> unblockCard(@PathVariable Long id){
        CardDetails cd = cardDetailsService.unblockCard(id);
        if(cd != null){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity("Incorrect body or card doesn't exist.",HttpStatus.BAD_REQUEST);
    }
    @PatchMapping("/card/{id}/change-pin")
    public ResponseEntity<?> changePin(@PathVariable Long id,@Valid @RequestBody PinDTO pin){
        PinDTO pinDTO = cardDetailsService.changePin(id, pin);
        if(pinDTO != null){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity("Card is not active.",HttpStatus.BAD_REQUEST);
    }
}