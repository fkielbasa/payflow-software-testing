package com.example.payflow;

import com.example.payflow.dto.*;
import com.example.payflow.dto.mapper.TransferDetailsResultDtoMapper;
import com.example.payflow.model.*;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.TransferRepository;
import com.example.payflow.service.ExchangeRateService;
import com.example.payflow.service.TransferService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.math.BigDecimal;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TransferTests {

    @InjectMocks
    private TransferService transferService;

    @Mock
    private TransferRepository transferRepository;

    @Mock
    private AccountNumberRepository accountNumberRepository;

    @Mock
    private ExchangeRateService exchangeRateService;

    @Mock
    private TransferDetailsResultDtoMapper transferDetailsResultDtoMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void Should_return_transfer_details_when_transfer_exists() {
        // Given
        Long transferId = 1L;
        Transfer transfer = new Transfer();
        TransferDetailsResultDto expectedDto = new TransferDetailsResultDto(
                1L,
                "2024-12-13",
                "100.00",
                "PLN",
                "Test transfer",
                new TransferAccountDto(
                        1L,
                        "Jakub",
                        "Jakubowski",
                        "12345678912345678912345678",
                        new TransferAddressDto("Country", "22-123", "City")
                ),
                new TransferAccountDto(
                        2L,
                        "Grzegorz",
                        "Grzegowski",
                        "98765432198765432198765432",
                        new TransferAddressDto("Country", "11-234", "City")
                )
        );

        when(transferRepository.findById(transferId)).thenReturn(Optional.of(transfer));
        when(transferDetailsResultDtoMapper.apply(transfer)).thenReturn(expectedDto);

        // When
        TransferDetailsResultDto result = transferService.getTransferById(transferId);

        // Then
        assertNotNull(result);
        assertEquals(expectedDto, result);
    }

    @Test
    void Should_return_null_when_sender_has_lacking_funds() {
        // Given
        Transfer transfer = new Transfer();
        AccountNumber sender = new AccountNumber(
                1L,
                new BigDecimal("50"),
                AccountNumberType.STANDARD,
                CurrencyType.PLN,
                "12345",
                null,
                null,
                null
        );
        AccountNumber receiver = new AccountNumber(
                2L,
                new BigDecimal("300"),
                AccountNumberType.STANDARD,
                CurrencyType.PLN,
                "54321",
                null,
                null,
                null
        );
        transfer.setSenderAccount(sender);
        transfer.setReceiverAccount(receiver);
        transfer.setAmount(new BigDecimal("100"));

        when(accountNumberRepository.findById(sender.getId())).thenReturn(Optional.of(sender));
        when(accountNumberRepository.findById(receiver.getId())).thenReturn(Optional.of(receiver));

        // When
        TransferDTO result = transferService.finalizeTransfer(transfer);

        // Then
        assertNull(result);
        verify(transferRepository, never()).save(any());
    }
}
