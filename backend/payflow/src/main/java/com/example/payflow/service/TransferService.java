package com.example.payflow.service;

import com.example.payflow.transfer.Transfer;
import com.example.payflow.transfer.TransferRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TransferService {

    private final TransferRepository transferRepository;

    public Transfer getTransferById(Long transferId) {
        return transferRepository.findById(transferId).orElse(null);
    }

    public List<Transfer> getTransfer(){
        return transferRepository.findAll();
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
    public Transfer addTransfer(Transfer transfer){
        var newTransfer = Transfer.builder()
                .transferDate(transfer.getTransferDate())
                .amount(transfer.getAmount())
                .senderAccount(transfer.getSenderAccount())
                .receiverAccount(transfer.getReceiverAccount())
                .build();
        return transferRepository.save(newTransfer);
    }
}