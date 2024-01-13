package com.example.payflow.service;

import com.example.payflow.dto.*;
import com.example.payflow.dto.mapper.TransferDTOMapper;
import com.example.payflow.dto.mapper.TransferDetailsResultDtoMapper;
import com.example.payflow.dto.mapper.TransferResultDTOMapper;
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
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TransferService {

    public static final String CURRENCY_EXCHANGE = "Wymiana waluty";
    private final TransferRepository transferRepository;

    private final UserDetailsRepository userDetailsRepository;
    private final UserRepository userRepository;
    private final AccountNumberRepository accountNumberRepository;
    private final ExchangeRateService exchangeRateService;
    private final TransferDTOMapper transferDTOMapper;
    private final TransferResultDTOMapper transferResultDTOMapper;
    private final TransferDetailsResultDtoMapper transferDetailsResultDtoMapper;

    public TransferDetailsResultDto getTransferById(Long transferId) {
        Optional<Transfer> transfer = transferRepository.findById(transferId);
        return transfer.map(transferDetailsResultDtoMapper).orElse(null);
    }

    public List<TransferResultDTO> getTransfersByAccountNumberId(Long id) {
        return transferRepository.findAll()
                .stream()
                .filter(
                        transfer -> transfer.getSenderAccount().getId().equals(id) ||
                                    transfer.getReceiverAccount().getId().equals(id)
                )
                .map(transferResultDTOMapper)
                .toList();
    }

    public TransferDTO addTransferByPhoneNumber(PhoneTransferDTO phoneTransfer) {
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
                        .amount(new BigDecimal(phoneTransfer.amount()))
                        .description(phoneTransfer.description())
                        .senderAccount(sender)
                        .receiverAccount(receiver)
                        .build();

        return finalizeTransfer(newTransfer);
    }

    public TransferDTO finalizeTransfer(Transfer transfer){
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

        return transferDTOMapper.apply(transfer);
    }


    public TransferDTO createTransfer(TransferDTO transferDTO) {
        // searching for accounts
        AccountNumber sender = accountNumberRepository.findAccountNumberByNumber(transferDTO.senderAccountNumber());
        AccountNumber receiver = accountNumberRepository.findAccountNumberByNumber(transferDTO.receiverAccountNumber());
//        AccountNumber receiver = accountNumberRepository.findById(transferDTO.receiverAccountId()).orElseThrow(EntityNotFoundException::new);
        System.out.println("TEST" + receiver.getNumber());
        Transfer newTransfer =
                Transfer.builder()
                        .transferDate(LocalDate.parse(new SimpleDateFormat("yyyy-MM-dd").format(new Date())))
                        .amount(new BigDecimal(transferDTO.amount()))
                        .description(transferDTO.description())
                        .senderAccount(sender)
                        .receiverAccount(receiver)
                        .build();

        return finalizeTransfer(newTransfer);
    }


    public TransferDTO exchangeBetweenAccounts(TransferExchangeDto exchange) {
        AccountNumber sender = accountNumberRepository.findAccountNumberByNumber(exchange.fromAccount());
        AccountNumber receiver = accountNumberRepository.findAccountNumberByNumber(exchange.toAccount());

        Transfer newTransfer =
                Transfer.builder()
                        .transferDate(LocalDate.parse(new SimpleDateFormat("yyyy-MM-dd").format(new Date())))
                        .amount(new BigDecimal(exchange.amount()))
                        .description(CURRENCY_EXCHANGE)
                        .senderAccount(sender)
                        .receiverAccount(receiver)
                        .build();

        return finalizeTransfer(newTransfer);
    }
}
