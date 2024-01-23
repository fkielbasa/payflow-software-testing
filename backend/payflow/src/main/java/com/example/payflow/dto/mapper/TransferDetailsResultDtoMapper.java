package com.example.payflow.dto.mapper;

import com.example.payflow.dto.AddressDTO;
import com.example.payflow.dto.TransferAccountDto;
import com.example.payflow.dto.TransferAddressDto;
import com.example.payflow.dto.TransferDetailsResultDto;
import com.example.payflow.model.Transfer;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class TransferDetailsResultDtoMapper implements Function<Transfer ,TransferDetailsResultDto> {

    @Override
    public TransferDetailsResultDto apply(Transfer transfer) {
        TransferAccountDto sender = new TransferAccountDto(
                transfer.getSenderAccount().getId(),
                transfer.getSenderAccount().getUserId().getFirstName(),
                transfer.getSenderAccount().getUserId().getLastName(),
                transfer.getSenderAccount().getNumber(),
                new TransferAddressDto(

                        transfer.getSenderAccount().getUserId().getCorrespondenceAddress().getCountry(),
                        transfer.getSenderAccount().getUserId().getCorrespondenceAddress().getZipCode(),
                        transfer.getSenderAccount().getUserId().getCorrespondenceAddress().getCity()
                )
        );
        TransferAccountDto receiver = new TransferAccountDto(
                transfer.getReceiverAccount().getId(),
                transfer.getReceiverAccount().getUserId().getFirstName(),
                transfer.getReceiverAccount().getUserId().getLastName(),
                transfer.getReceiverAccount().getNumber(),
                new TransferAddressDto(

                        transfer.getReceiverAccount().getUserId().getCorrespondenceAddress().getCountry(),
                        transfer.getReceiverAccount().getUserId().getCorrespondenceAddress().getZipCode(),
                        transfer.getReceiverAccount().getUserId().getCorrespondenceAddress().getCity()
                )
        );
        return new TransferDetailsResultDto(
                transfer.getId(),
                transfer.getTransferDate().toString(),
                transfer.getAmount().toString(),
                transfer.getSenderAccount().getCurrency().toString(),
                transfer.getDescription(),
                sender,
                receiver
        );
    }
}
