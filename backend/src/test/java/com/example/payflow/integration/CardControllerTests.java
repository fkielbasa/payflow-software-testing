package com.example.payflow.integration;

import com.example.payflow.PayflowApplication;
import com.example.payflow.model.Card;
import com.example.payflow.model.CardDetails;
import com.example.payflow.repository.CardRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = PayflowApplication.class)
public class CardControllerTests {

    @MockBean
    private CardRepository cardRepository;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldRemoveCard_whenCardExistsAndPinMatches() throws Exception {
        // Given
        Long cardId = 1L;
        String pin = "1234";

        CardDetails cardDetails = CardDetails.builder()
                .pin(pin)
                .build();

        Card card = Card.builder()
                .id(cardId)
                .cardDetails(cardDetails)
                .build();

        when(cardRepository.findById(cardId)).thenReturn(Optional.of(card));

        // When
        mockMvc.perform(delete("/api/v1/cards/{id}", cardId)
                        .param("pin", pin))
                .andExpect(status().isOk());

        // Then
        verify(cardRepository).deleteById(cardId);
    }

    @Test
    public void shouldReturnBadRequest_whenPinDoesNotMatch() throws Exception {
        // Given
        Long cardId = 1L;
        String pin = "1234";
        String wrongPin = "4321";

        CardDetails cardDetails = CardDetails.builder()
                .pin(pin)
                .build();

        Card card = Card.builder()
                .id(cardId)
                .cardDetails(cardDetails)
                .build();

        when(cardRepository.findById(cardId)).thenReturn(Optional.of(card));

        // When
        mockMvc.perform(delete("/api/v1/cards/{id}", cardId)
                        .param("pin", wrongPin))
                .andExpect(status().isBadRequest());

        // Then
        verify(cardRepository, never()).deleteById(any());
    }
}
