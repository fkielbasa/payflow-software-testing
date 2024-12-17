package com.example.payflow.integration;

import com.example.payflow.PayflowApplication;
import com.example.payflow.dto.TransferAccountDto;
import com.example.payflow.dto.TransferDTO;
import com.example.payflow.dto.TransferDetailsResultDto;
import com.example.payflow.dto.TransferResultDTO;
import com.example.payflow.service.TransferService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.ArgumentMatchers.eq;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(classes = PayflowApplication.class)
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc(addFilters = false)
class TransferControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TransferService transferService;

    @Autowired
    private ObjectMapper objectMapper;

    private String token;
    private TransferDetailsResultDto mockTransferDetails;

    @BeforeEach
    void setUp() {
        token = "Bearer test-token";

        mockTransferDetails = TransferDetailsResultDto.builder()
                .id(1L)
                .date("2024-12-16T10:00:00")
                .amount("10.00")
                .currency("PLN")
                .description("Test Transfer")
                .sender(TransferAccountDto.builder()
                        .id(1L)
                        .firstName("Jakub")
                        .lastName("Jakubowski")
                        .accountNumber("1234567890")
                        .build())
                .receiver(TransferAccountDto.builder()
                        .id(2L)
                        .firstName("John")
                        .lastName("Doe")
                        .accountNumber("0987654321")
                        .build())
                .build();
    }

    @Test
    void getTransferById_ShouldReturnTransferDetails_WhenTransferExists() throws Exception {
        // given
        Mockito.when(transferService.getTransferById(eq(1L))).thenReturn(mockTransferDetails);

        // when
        var resultActions = mockMvc.perform(get("/api/v1/transfers/1")
                .header("Authorization", token)
                .contentType(MediaType.APPLICATION_JSON));

        // then
        resultActions.andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(mockTransferDetails)));

    }

    @Test
    void getAllTransfersByUserId_ShouldReturnTransfersList_WhenTransfersExist() throws Exception {
        // given
        List<TransferResultDTO> transfers = List.of(
                TransferResultDTO.builder()
                        .id(1L)
                        .date("2024-12-16")
                        .amount(String.valueOf(100.0))
                        .currency("PLN")
                        .description("Test Transfer")
                        .senderAccountId(TransferAccountDto.builder()
                                .id(1L)
                                .firstName("Jakub")
                                .lastName("Jakubowski")
                                .accountNumber("1234567890")
                                .build().id())
                        .senderFullName("Jakub Jakubowski")
                        .receiverAccountId(TransferAccountDto.builder()
                                .id(2L)
                                .firstName("Grzegorz")
                                .lastName("Grzegowski")
                                .accountNumber("0987654321")
                                .build().id())
                        .receiverFullName("Grzegorz Grzegowski")
                        .build()
        );
        Mockito.when(transferService.getAllTransferByUserId(eq(1L), eq(100)))
                .thenReturn(transfers);

        // when
        var resultActions = mockMvc.perform(get("/api/v1/users/1/transfers")
                .param("last", "100")
                .header("Authorization", token)
                .contentType(MediaType.APPLICATION_JSON));

        // then
        resultActions.andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(transfers)));
    }

    @Test
    void getTransfersByAccountNumberId_ShouldReturnTransfersList_WhenTransfersExist() throws Exception {
        // given
        List<TransferResultDTO> transfers = List.of(
                TransferResultDTO.builder()
                        .id(1L)
                        .date("2024-12-16")
                        .amount(String.valueOf(100.0))
                        .currency("PLN")
                        .description("Test Transfer")
                        .senderAccountId(TransferAccountDto.builder()
                                .id(1L)
                                .firstName("Jakub")
                                .lastName("Jakubowski")
                                .accountNumber("1234567890")
                                .build().id())
                        .senderFullName("Jakub Jakubowski")
                        .receiverAccountId(TransferAccountDto.builder()
                                .id(2L)
                                .firstName("Grzegorz")
                                .lastName("Grzegowski")
                                .accountNumber("0987654321")
                                .build().id())
                        .receiverFullName("Grzegorz Grzegowski")
                        .build()
        );
        Mockito.when(transferService.getTransfersByAccountNumberId(eq(1L), eq(100)))
                .thenReturn(transfers);

        // when
        var resultActions = mockMvc.perform(get("/api/v1/account-numbers/1/transfers")
                .param("last", "100")
                .header("Authorization", token)
                .contentType(MediaType.APPLICATION_JSON));

        // then
        resultActions.andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(transfers)));
    }

    @Test
    void createNewTransfer_ShouldReturnOk_WhenTransferIsCreated() throws Exception {
        // given
        TransferDTO transferDTO = TransferDTO.builder()
                .amount("100.00")
                .description("Test Transfer")
                .senderAccountNumber("1234567890")
                .receiverAccountNumber("0987654321")
                .build();

        Mockito.when(transferService.createTransfer(Mockito.any(TransferDTO.class)))
                .thenReturn(transferDTO);

        // when
        var resultActions = mockMvc.perform(post("/api/v1/transfer")
                .header("Authorization", token)
                .content(objectMapper.writeValueAsString(transferDTO))
                .contentType(MediaType.APPLICATION_JSON));

        // then
        resultActions.andExpect(status().isCreated())
                .andExpect(content().json(objectMapper.writeValueAsString(transferDTO)));
    }

}
