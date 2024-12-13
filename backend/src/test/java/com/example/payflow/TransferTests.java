package com.example.payflow;

import com.example.payflow.dto.*;
import com.example.payflow.dto.mapper.TransferDetailsResultDtoMapper;
import com.example.payflow.model.*;
import com.example.payflow.repository.TransferRepository;
import com.example.payflow.service.TransferService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TransferTests {

    @InjectMocks
    private TransferService transferService;

    @Mock
    private TransferRepository transferRepository;

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
}
