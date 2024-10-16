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
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Optional;
/**
 * Service for handling transfer operations.
 */
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

    /**
     * Retrieves details of a transfer by its identifier.
     *
     * @param transferId The transfer identifier.
     * @return Details of the transfer.
     */
    public TransferDetailsResultDto getTransferById(Long transferId) {
        Optional<Transfer> transfer = transferRepository.findById(transferId);
        return transfer.map(transferDetailsResultDtoMapper).orElse(null);
    }
    /**
     * Gets a list of the latest transfers for a given account number.
     *
     * @param id   The account number identifier.
     * @param last Number of latest transfers to retrieve.
     * @return List of the latest transfers.
     */
    public List<TransferResultDTO> getTransfersByAccountNumberId(Long id, int last) {
        return transferRepository.findAll()
                .stream()
                .filter(
                        transfer -> transfer.getSenderAccount().getId().equals(id) ||
                                    transfer.getReceiverAccount().getId().equals(id)
                )
                .map(transferResultDTOMapper)
                .sorted(Comparator.comparing(TransferResultDTO::date).reversed())
                .sorted(Comparator.comparing(TransferResultDTO::id).reversed())
                .limit(last)
                .toList();
    }

    /**
     * Gets a list of all transfers for a given user.
     *
     * @param id   The user identifier.
     * @param last Number of latest transfers to retrieve.
     * @return List of all transfers for the user.
     */
    public List<TransferResultDTO> getAllTransferByUserId(Long id, int last) {
        return transferRepository
                .findAll()
                .stream()
                .filter(transfer -> transfer.getSenderAccount().getUserId().getId().equals(id)
                                    || transfer.getReceiverAccount().getUserId().getId().equals(id)
                )
                .map(transferResultDTOMapper)
                .sorted(Comparator.comparing(TransferResultDTO::date).reversed())
                .sorted(Comparator.comparing(TransferResultDTO::id).reversed())
                .limit(last)
                .toList();
    }
    /**
     * Adds a new transfer based on the recipient's phone number.
     *
     * @param phoneTransfer DTO object for the transfer based on the recipient's phone number.
     * @return DTO of the new transfer.
     */
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
    /**
     * Finalizes the transfer process.
     *
     * @param transfer The transfer object.
     * @return DTO of the transfer.
     */
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

    /**
     * Creates a new transfer.
     *
     * @param transferDTO DTO object of the transfer.
     * @return DTO of the new transfer.
     */
    public TransferDTO createTransfer(TransferDTO transferDTO) {
        // searching for accounts
        AccountNumber sender = accountNumberRepository.findAccountNumberByNumber(transferDTO.senderAccountNumber());
        AccountNumber receiver = accountNumberRepository.findAccountNumberByNumber(transferDTO.receiverAccountNumber());

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

    /**
     * Executes currency exchange between accounts.
     *
     * @param exchange DTO object of the currency exchange.
     * @return
     */
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
