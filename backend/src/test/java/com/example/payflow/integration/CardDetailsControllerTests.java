package com.example.payflow.integration;

import com.example.payflow.PayflowApplication;
import com.example.payflow.dto.PinDTO;
import com.example.payflow.model.CardDetails;
import com.example.payflow.service.CardDetailsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.client.ResponseActions;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = PayflowApplication.class)
public class CardDetailsControllerTests {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CardDetailsService cardDetailsService;

    @Autowired
    private ObjectMapper objectMapper;
    PinDTO pin = new PinDTO("1234");

    @Test
    void shouldReturnNoContent_whenCardIsActivatedWithCorrectPin() throws Exception {
        // Given
        Long cardId = 1L;
        PinDTO pin = new PinDTO("1234");

        when(cardDetailsService.activateCard(cardId, pin)).thenReturn(new CardDetails());

        // When
                mockMvc.perform(patch("/api/v1/cards/{id}/activate", cardId)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(objectMapper.writeValueAsString(pin)))
        // Then
                                .andExpect(status().isNoContent());

        verify(cardDetailsService).activateCard(cardId, pin);
    }
    @Test
    void shouldReturnBadRequest_whenCardDoesNotExist() throws Exception {
        // Given
        Long cardId = 2137L;

        when(cardDetailsService.activateCard(cardId, pin)).thenReturn(null);

        // When
        mockMvc.perform(patch("/api/v1/cards/{id}/activate", cardId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(pin)))
        // Then:
                .andExpect(status().isBadRequest());

        verify(cardDetailsService).activateCard(cardId, pin);
    }
}
