package com.example.payflow.controller;

import com.example.payflow.service.TransferService;
import com.example.payflow.model.Transfer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class TransferController {
    private final TransferService transferService;
    @GetMapping("/transfer/{transferId}")
    public ResponseEntity<Transfer> getTransferById(@PathVariable Long transferId) {
        Transfer transfer = transferService.getTransferById(transferId);
        if (transfer != null) {
            return ResponseEntity.ok(transfer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
