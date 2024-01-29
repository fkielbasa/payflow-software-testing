package com.example.payflow.dto.mapper;

import com.example.payflow.dto.TransferDTO;
import com.example.payflow.model.Transfer;
import org.springframework.stereotype.Service;

import java.util.function.Function;
/**
 * Service class responsible for mapping a Transfer entity to a TransferDTO.
 *
 * This class implements the Function interface for functional mapping.
 * It converts a Transfer entity to a TransferDTO, preserving essential details.
 */
@Service
public class TransferDTOMapper implements Function<Transfer, TransferDTO> {

    /**
     * Maps a Transfer entity to a TransferDTO.
     *
     * @param transfer The Transfer entity to be mapped.
     * @return TransferDTO containing essential details about the transfer.
     */
    @Override
    public TransferDTO apply(Transfer transfer) {
        return new TransferDTO(
                transfer.getAmount().toString(),
                transfer.getDescription(),
                transfer.getSenderAccount().getNumber(),
                transfer.getReceiverAccount().getNumber()
        );
    }
}
