package com.example.payflow.controller;

import com.example.payflow.DTO.PhoneTransferDTO;
import com.example.payflow.DTO.TransferDTO;
import com.example.payflow.service.TransferService;
import com.example.payflow.model.Transfer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class TransferController {
    private final TransferService transferService;
    @GetMapping("/transfers/{id}")
    public ResponseEntity<Transfer> getTransferById(@PathVariable Long id) {
        Transfer transfer = transferService.getTransferById(id);
        if (transfer != null) {
            return ResponseEntity.ok(transfer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/transfers")
    public ResponseEntity<Transfer> createTransfer(@RequestBody TransferDTO transferDTO){
        Transfer transfer = transferService.createTransfer(transferDTO);
        if (transfer != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(transfer);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
        }
    }

    @PostMapping("/transfers/phone-number")
    public ResponseEntity<Transfer> addTransferByPhoneNumber(@RequestBody PhoneTransferDTO phoneTransfer){
        Transfer t = transferService.addTransferByPhoneNumber(phoneTransfer);
        if (t != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(t);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
        }
    }


}
