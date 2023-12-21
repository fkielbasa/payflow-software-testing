package com.example.payflow.controller;

import com.example.payflow.dto.PhoneTransferDTO;
import com.example.payflow.dto.TransferDTO;
import com.example.payflow.dto.TransferResultDTO;
import com.example.payflow.service.TransferService;
import com.example.payflow.model.Transfer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
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

    @GetMapping("/account-numbers/{id}/transfers")
    public ResponseEntity<List<TransferResultDTO>> getTransfersByAccountNumberId(@PathVariable Long id){
        List<TransferResultDTO> transferList = transferService.getTransfersByAccountNumberId(id);
        if (transferList.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
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




}
