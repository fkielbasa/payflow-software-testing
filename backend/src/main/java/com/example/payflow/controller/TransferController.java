package com.example.payflow.controller;

import com.example.payflow.dto.*;
import com.example.payflow.service.TransferService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
/**
 * Controller class responsible for managing operations related to transfers.
 * Provides endpoints for retrieving, creating, and exchanging transfers.
 */
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class TransferController {

    /**
     * Service for handling transfer operations.
     */
    private final TransferService transferService;

    /**
     * Retrieves a transfer by its ID using a HTTP GET request.
     *
     * @param id Transfer ID to retrieve.
     * @return ResponseEntity with the {@link TransferDetailsResultDto} if found, else returns a 404 status.
     */
    @GetMapping("/transfers/{id}")
    public ResponseEntity<TransferDetailsResultDto> getTransferById(@PathVariable Long id) {
        TransferDetailsResultDto transfer = transferService.getTransferById(id);
        if (transfer != null) {
            return ResponseEntity.status(HttpStatus.OK).body(transfer);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    /**
     * Retrieves a list of transfers by user ID using a HTTP GET request.
     *
     * @param id   User ID for whom to retrieve transfers.
     * @param last Number of most recent transfers to retrieve (default is 100).
     * @return ResponseEntity with a list of {@link TransferResultDTO} objects if transfers are found, else returns a 404 status.
     */
    @GetMapping("/users/{id}/transfers")
    public ResponseEntity<List<TransferResultDTO>> getAllTransfersByUserId(@PathVariable Long id,@RequestParam(required = false, defaultValue = "100") int last){
        List<TransferResultDTO> transfers = transferService.getAllTransferByUserId(id, last);
        if (transfers != null)
            return ResponseEntity.status(HttpStatus.OK).body(transfers);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    /**
     * Retrieves a list of transfers by account number ID using a HTTP GET request.
     *
     * @param id   Account number ID for which to retrieve transfers.
     * @param last Number of most recent transfers to retrieve (default is 100).
     * @return ResponseEntity with a list of {@link TransferResultDTO} objects if transfers are found, else returns a 404 status.
     */
    @GetMapping("/account-numbers/{id}/transfers")
    public ResponseEntity<List<TransferResultDTO>> getTransfersByAccountNumberId(@PathVariable Long id,@RequestParam(required = false, defaultValue = "100") int last){
        List<TransferResultDTO> transferList = transferService.getTransfersByAccountNumberId(id, last);
        if (transferList.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        else
            return ResponseEntity.status(HttpStatus.OK).body(transferList);
    }

    /**
     * Creates a new transfer using a HTTP POST request.
     *
     * @param transferDTO TransferDTO containing the details of the new transfer.
     * @return ResponseEntity with the added {@link TransferDTO} if successful, else returns a 406 status.
     */
    @PostMapping("/transfer")
    public ResponseEntity<TransferDTO> createTransfer(@RequestBody TransferDTO transferDTO){
        TransferDTO transfer = transferService.createTransfer(transferDTO);
        if (transfer != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(transfer);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
        }
    }

    /**
     * Creates a new transfer using a phone number using a HTTP POST request.
     *
     * @param phoneTransfer PhoneTransferDTO containing the details of the new transfer.
     * @return ResponseEntity with the added {@link TransferDTO} if successful, else returns a 406 status.
     */
    @PostMapping("/transfer/phone-number")
    public ResponseEntity<TransferDTO> addTransferByPhoneNumber(@RequestBody PhoneTransferDTO phoneTransfer){
        TransferDTO t = transferService.addTransferByPhoneNumber(phoneTransfer);
        if (t != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(t);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(null);
        }
    }

    /**
     * Exchanges funds between accounts using a HTTP POST request.
     *
     * @param exchange TransferExchangeDto containing the details of the fund exchange.
     * @return ResponseEntity with the added {@link TransferDTO} if successful, else throws a 400 status exception.
     */
    @PostMapping("/transfer/exchange")
    public ResponseEntity<TransferDTO> exchangeBetweenAccounts(@RequestBody TransferExchangeDto exchange){
        TransferDTO t = transferService.exchangeBetweenAccounts(exchange);
        if (t != null)
            return ResponseEntity.status(HttpStatus.CREATED).body(t);
        else
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    }




}
