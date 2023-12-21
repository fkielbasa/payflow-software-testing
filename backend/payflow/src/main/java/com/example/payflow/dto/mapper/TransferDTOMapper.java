package com.example.payflow.dto.mapper;

import com.example.payflow.dto.TransferDTO;
import com.example.payflow.model.Transfer;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class TransferDTOMapper implements Function<Transfer, TransferDTO> {
    @Override
    public TransferDTO apply(Transfer transfer) {
        return new TransferDTO(
                transfer.getAmount().toString(),
                transfer.getDescription(),
                transfer.getSenderAccount().getId(),
                transfer.getReceiverAccount().getId()
        );
    }
}
