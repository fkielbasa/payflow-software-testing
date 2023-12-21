package com.example.payflow.service;

import com.example.payflow.dto.PhoneTransferDTO;
import com.example.payflow.dto.TransferDTO;
import com.example.payflow.model.*;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.TransferRepository;
import com.example.payflow.repository.UserDetailsRepository;
import com.example.payflow.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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
    private final ExchangeRateService exchangeRateService;

    public Transfer getTransferById(Long transferId) {
        return transferRepository.findById(transferId).orElse(null);
    }

    public Transfer addTransferByPhoneNumber(PhoneTransferDTO phoneTransfer) {
        // searching for receiver
        UserDetails userDetails = userDetailsRepository.findByPhoneNumber(phoneTransfer.phoneNumber());
        User searchedUser = userRepository.findById(userDetails.getUserId().getId()).orElseThrow(EntityNotFoundException::new);
        List<AccountNumber> receiverAccounts = accountNumberRepository.findAllByUserId(searchedUser);
        AccountNumber receiver =
                receiverAccounts.stream()
                        .filter(r -> r.getCurrency().equals(CurrencyType.PLN)).toList().get(0);
        // searching for sender
        AccountNumber sender = accountNumberRepository.findById(phoneTransfer.senderId()).orElseThrow(EntityNotFoundException::new);

        Transfer newTransfer =
                Transfer.builder()
                        .transferDate(LocalDate.parse(new SimpleDateFormat("yyyy-MM-dd").format(new Date())))
                        .amount(phoneTransfer.amount())
                        .senderAccount(sender)
                        .receiverAccount(receiver)
                        .build();

        return finalizeTransfer(newTransfer);
    }

    public Transfer finalizeTransfer(Transfer transfer){
        Double exchangeRate =
                exchangeRateService.getExchangeRateBetweenCurrency(
                        transfer.getSenderAccount(),
                        transfer.getReceiverAccount()
                );


        // searching for accounts
        AccountNumber sender = accountNumberRepository.findById(transfer.getSenderAccount().getId()).orElseThrow(EntityNotFoundException::new);
        AccountNumber receiver = accountNumberRepository.findById(transfer.getReceiverAccount().getId()).orElseThrow(EntityNotFoundException::new);

        // check if the sender has enough balance to finalize transfer
        if (!(sender.getBalance().subtract(transfer.getAmount()).compareTo(new BigDecimal(0)) > 0 ))
            return null;

        // changing balance after transfer
        sender.setBalance(sender.getBalance().subtract(transfer.getAmount()));
        receiver.setBalance(receiver.getBalance().add((transfer.getAmount().multiply(new BigDecimal(exchangeRate)))));

        // saving data transfer
        accountNumberRepository.save(sender);
        accountNumberRepository.save(receiver);
        transferRepository.save(transfer);

        return transfer;
    }


    public Transfer createTransfer(TransferDTO transferDTO) {
        // searching for accounts
        AccountNumber sender = accountNumberRepository.findById(transferDTO.senderAccountId()).orElseThrow(EntityNotFoundException::new);
        AccountNumber receiver = accountNumberRepository.findById(transferDTO.receiverAccountId()).orElseThrow(EntityNotFoundException::new);

        Transfer newTransfer =
                Transfer.builder()
                        .transferDate(LocalDate.parse(new SimpleDateFormat("yyyy-MM-dd").format(new Date())))
                        .amount(transferDTO.amount())
                        .senderAccount(sender)
                        .receiverAccount(receiver)
                        .build();

        return finalizeTransfer(newTransfer);
    }
}
