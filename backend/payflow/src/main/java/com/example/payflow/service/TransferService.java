package com.example.payflow.service;

import com.example.payflow.DTO.PhoneTransferDTO;
import com.example.payflow.model.*;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.TransferRepository;
import com.example.payflow.repository.UserDetailsRepository;
import com.example.payflow.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransferService {

    private final TransferRepository transferRepository;

    private final UserDetailsRepository userDetailsRepository;
    private final UserRepository userRepository;
    private final AccountNumberRepository accountNumberRepository;
    public Transfer getTransferById(Long transferId) {
        return transferRepository.findById(transferId).orElse(null);
    }

    public Transfer addTransferByPhoneNumber(PhoneTransferDTO phoneTransfer) {
        // searching for receiver
        UserDetails userDetails = userDetailsRepository.findByPhoneNumber(phoneTransfer.getPhoneNumber());
        User searchedUser = userRepository.findById(userDetails.getUserId().getId()).orElseThrow(EntityNotFoundException::new);
        List<AccountNumber> receiverAccounts = accountNumberRepository.findAllByUserId(searchedUser);
        AccountNumber receiver =
                receiverAccounts.stream()
                        .filter(r -> r.getCurrencyType().equals(CurrencyType.PLN)).toList().get(0);
        // searching for sender
        AccountNumber sender = accountNumberRepository.findById(phoneTransfer.getSender().getId()).orElseThrow(EntityNotFoundException::new);

        Transfer newTransfer =
                Transfer.builder()
                        .transferDate(LocalDate.parse(new SimpleDateFormat("yyyy-MM-dd").format(new Date())))
                        .amount(phoneTransfer.getAmount())
                        .senderAccount(sender)
                        .receiverAccount(receiver)
                        .build();
        return finalizeTransfer(newTransfer);
    }

    public Transfer finalizeTransfer(Transfer transfer){
        // TODO finalize transfer??
        return transfer;
    }

//    public boolean makeTransfer(TransferRequest transferRequest) {
//
//
//
//        Transfer transfer = new Transfer();
//        transfer.setAmount(transferRequest.getAmount());
//        transfer.setTransferDate(transferRequest.getTransferDate());
//        transfer.setSenderAccountNumber(transferRequest.getSenderAccountNumber());
//        transfer.setReceiverAccountNumber(transferRequest.getReceiverAccountNumber());
//
//        try {
//            transferRepository.save(transfer);
//            return true;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return false;
//        }
//    }

}
