package com.example.payflow.controller;

import com.example.payflow.dto.*;
import com.example.payflow.service.TransferService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class TransferController {
    private final TransferService transferService;
    @GetMapping("/transfers/{id}")
    public ResponseEntity<TransferDetailsResultDto> getTransferById(@PathVariable Long id) {
        TransferDetailsResultDto transfer = transferService.getTransferById(id);
        if (transfer != null) {
            return ResponseEntity.status(HttpStatus.OK).body(transfer);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }



    @GetMapping("/account-numbers/{id}/transfers")
    public ResponseEntity<List<TransferResultDTO>> getTransfersByAccountNumberId(@PathVariable Long id,@RequestParam(required = false, defaultValue = "200") int last){
        List<TransferResultDTO> transferList = transferService.getTransfersByAccountNumberId(id, last);
        if (transferList.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        else
            return ResponseEntity.status(HttpStatus.OK).body(transferList);
    }



    @PostMapping("/transfer")
    public ResponseEntity<TransferDTO> createTransfer(@RequestBody TransferDTO transferDTO){
        TransferDTO transfer = transferService.createTransfer(transferDTO);
        if (transfer != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(transfer);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
        }
    }

    @PostMapping("/transfer/phone-number")
    public ResponseEntity<TransferDTO> addTransferByPhoneNumber(@RequestBody PhoneTransferDTO phoneTransfer){
        TransferDTO t = transferService.addTransferByPhoneNumber(phoneTransfer);
        if (t != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(t);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
        }
    }

    @PostMapping("/transfer/exchange")
    public ResponseEntity<TransferDTO> exchangeBetweenAccounts(@RequestBody TransferExchangeDto exchange){
        TransferDTO t = transferService.exchangeBetweenAccounts(exchange);
        if (t != null)
            return ResponseEntity.status(HttpStatus.CREATED).body(t);
        else
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    }




}
