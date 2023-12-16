package com.example.payflow.controller;

import com.example.payflow.service.TransferService;
import com.example.payflow.transfer.Transfer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class TransferController {
    private final TransferService transferService;
    @GetMapping("/transfers")
    public List<Transfer> getAllTransfers() {
        return transferService.getTransfer();
    }

    @GetMapping("/transfer/{transferId}")
    public ResponseEntity<Transfer> getTransferById(@PathVariable Long transferId) {
        Transfer transfer = transferService.getTransferById(transferId);
        if (transfer != null) {
            return ResponseEntity.ok(transfer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/transfer/add")
    public ResponseEntity<Transfer> addLoan(@RequestBody Transfer transfer) {
        transferService.addTransfer(transfer);
        return ResponseEntity.ok(transfer);
    }
}
