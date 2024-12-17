package com.example.payflow.integration;

import com.example.payflow.PayflowApplication;
import com.example.payflow.controller.LoanController;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.payflow.dto.LoanDTOPost;
import com.example.payflow.dto.LoanDTO;
import com.example.payflow.service.LoanService;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(classes = PayflowApplication.class)
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc(addFilters = false)
class LoanControllerTests {

    @Mock
    private LoanService loanService;

    @InjectMocks
    private LoanController loanController;

    private MockMvc mockMvc;
    private ObjectMapper objectMapper;

    private String token;

    @BeforeEach
    void setUp() {
        token = "Bearer test-token";

        mockMvc = MockMvcBuilders.standaloneSetup(loanController).build();
        objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
    }

    @Test
    void addLoan_ShouldReturnCreated_WhenLoanIsValid() throws Exception {
        // Given
        Long accountId = 1L;
        LoanDTOPost loanPost = LoanDTOPost.builder()
                .amount(BigDecimal.valueOf(1000.0))
                .endDate(LocalDate.parse("2024-12-16"))
                .interestRate(BigDecimal.valueOf(12))
                .build();
        LoanDTO loanDTO = LoanDTO.builder()
                .id(1L)
                .amount(BigDecimal.valueOf(1000.0))
                .startDate(LocalDate.now())
                .endDate(LocalDate.parse("2024-12-16"))
                .interestRate(BigDecimal.valueOf(12))
                .idAccountNumber(accountId)
                .build();
        Mockito.when(loanService.addLoan(accountId, loanPost)).thenReturn(loanDTO);

        // When
        var resultActions = mockMvc.perform(post("/api/v1/numbers/{id}/loan", accountId)
                .header("Authorization", token)
                .content(objectMapper.writeValueAsString(loanPost))
                .contentType(MediaType.APPLICATION_JSON));

        // Then
        resultActions.andExpect(status().isCreated())
                .andExpect(content().json(objectMapper.writeValueAsString(loanDTO)));
    }
}
