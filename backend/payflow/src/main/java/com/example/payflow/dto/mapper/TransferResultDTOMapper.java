package com.example.payflow.dto.mapper;

import com.example.payflow.dto.TransferResultDTO;
import com.example.payflow.model.Transfer;
import org.springframework.stereotype.Service;

import java.util.function.Function;

/**
 * Service class responsible for mapping a Transfer entity to a TransferResultDTO.
 *
 * This class implements the Function interface for functional mapping.
 * It converts a Transfer entity to a TransferResultDTO, preserving essential details.
 */
@Service
public class TransferResultDTOMapper implements Function<Transfer, TransferResultDTO> {

    /**
     * Maps a Transfer entity to a TransferResultDTO.
     *
     * @param transfer The Transfer entity to be mapped.
     * @return TransferResultDTO containing essential details about the transfer result.
     */
    @Override
    public TransferResultDTO apply(Transfer transfer) {
        return new TransferResultDTO(
                transfer.getId(),
                transfer.getTransferDate().toString(),
                transfer.getAmount().toString(),
                transfer.getSenderAccount().getCurrency().toString(),
                transfer.getDescription(),
                transfer.getSenderAccount().getId(),
                transfer.getSenderAccount().getUserId().getFirstName() + " " + transfer.getSenderAccount().getUserId().getLastName(),
                transfer.getReceiverAccount().getId(),
                transfer.getReceiverAccount().getUserId().getFirstName() + " " + transfer.getReceiverAccount().getUserId().getLastName()

        );
    }
}
