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
/**
 * Controller class responsible for managing operations related to card details.
 * Provides endpoints for activating, blocking, unblocking, and changing PIN for a card.
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class CardDetailsController {

    /**
     * Service for handling card details operations.
     */
    private final CardDetailsService cardDetailsService;

    /**
     * Service for handling card operations.
     */
    private final CardService cardService;

    /**
     * Activates a card using a HTTP PATCH request.
     *
     * @param id  Card ID to activate.
     * @param pin PinDTO containing the PIN for activation.
     * @return ResponseEntity with a success status if the card is successfully activated, else returns a 400 status.
     */
    @PatchMapping("/cards/{id}/activate")
    public ResponseEntity<?> activeCard(@PathVariable Long id,@Valid @RequestBody PinDTO pin){
        CardDetails cd = cardDetailsService.activateCard(id, pin);
        if(cd != null){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity("Card doesn't exist.",HttpStatus.BAD_REQUEST);
    }

    /**
     * Blocks a card using a HTTP PATCH request.
     *
     * @param id Card ID to block.
     * @return ResponseEntity with a success status if the card is successfully blocked, else returns a 400 status.
     */
    @PatchMapping("/cards/{id}/block")
    public ResponseEntity<?> blockCard(@PathVariable Long id){
        CardDetails cd = cardDetailsService.blockCard(id);
        if(cd != null){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity("Card doesn't exist.",HttpStatus.BAD_REQUEST);
    }

    /**
     * Unblocks a card using a HTTP PATCH request.
     *
     * @param id Card ID to unblock.
     * @return ResponseEntity with a success status if the card is successfully unblocked, else returns a 400 status.
     */
    @PatchMapping("/cards/{id}/unblock")
    public ResponseEntity<?> unblockCard(@PathVariable Long id){
        CardDetails cd = cardDetailsService.unblockCard(id);
        if(cd != null){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity("Card doesn't exist.",HttpStatus.BAD_REQUEST);
    }

    /**
     * Changes the PIN for a card using a HTTP PATCH request.
     *
     * @param id  Card ID to change the PIN.
     * @param pin PinDTO containing the new PIN.
     * @return ResponseEntity with a success status if the PIN is successfully changed, else returns a 400 status.
     */
    @PatchMapping("/cards/{id}/change-pin")
    public ResponseEntity<?> changePin(@PathVariable Long id,@Valid @RequestBody PinDTO pin){
        PinDTO pinDTO = cardDetailsService.changePin(id, pin);
        if(pinDTO != null){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity("Card doesn't exist or is inactive.",HttpStatus.BAD_REQUEST);
    }
}
