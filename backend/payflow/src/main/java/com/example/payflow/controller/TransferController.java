package com.example.payflow.controller;

import com.example.payflow.DTO.PhoneTransferDTO;
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
    @GetMapping("/transfers/{transfer-id}")
    public ResponseEntity<Transfer> getTransferById(@PathVariable(name = "transfer-id") Long transferId) {
        Transfer transfer = transferService.getTransferById(transferId);
        if (transfer != null) {
            return ResponseEntity.ok(transfer);
        } else {
            return ResponseEntity.notFound().build();
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
