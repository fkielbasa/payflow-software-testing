package com.example.payflow;

import com.example.payflow.dto.PinDTO;
import com.example.payflow.model.Card;
import com.example.payflow.model.CardDetails;
import com.example.payflow.repository.CardDetailsRepository;
import com.example.payflow.repository.CardRepository;
import com.example.payflow.service.CardDetailsService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class CardDetailsServiceTests {
    @Mock
    private CardRepository cardRepository;

    @Mock
    private CardDetailsRepository cardDetailsRepository;

    @InjectMocks
    private CardDetailsService cardDetailsService;

    @Test
    void givenExistingCard_whenActivating_thenCardIsActivated() {
        // Given
        Long cardId = 1L;
        PinDTO pinDTO = new PinDTO("1234");

        Card card = mock(Card.class);
        CardDetails cardDetails = CardDetails.builder()
                .active(false)
                .pin(null)
                .build();

        when(card.getCardDetails()).thenReturn(cardDetails);
        when(cardRepository.findById(cardId)).thenReturn(Optional.of(card));
        when(cardDetailsRepository.save(any(CardDetails.class))).thenReturn(cardDetails);

        // When
        CardDetails result = cardDetailsService.activateCard(cardId, pinDTO);

        // Then
        assertNotNull(result);
        assertTrue(result.isActive());
        assertEquals("1234", result.getPin());
        verify(cardRepository).findById(cardId);
        verify(cardDetailsRepository).save(cardDetails);
    }
    @Test
    void givenExistingCard_whenBlocking_thenCardIsBlocked() {
        // Given
        Long cardId = 1L;

        Card card = mock(Card.class);
        CardDetails cardDetails = CardDetails.builder()
                .blocked(false)
                .build();

        when(card.getCardDetails()).thenReturn(cardDetails);
        when(cardRepository.findById(cardId)).thenReturn(Optional.of(card));
        when(cardDetailsRepository.save(any(CardDetails.class))).thenReturn(cardDetails);

        // When
        CardDetails result = cardDetailsService.blockCard(cardId);

        // Then
        assertNotNull(result);
        assertTrue(result.isBlocked());
        verify(cardRepository).findById(cardId);
        verify(cardDetailsRepository).save(cardDetails);
    }

    @Test
    void givenBlockedCard_whenUnblocking_thenCardIsUnblocked() {
        // Given
        Long cardId = 1L;

        Card card = mock(Card.class);
        CardDetails cardDetails = CardDetails.builder()
                .blocked(true)
                .build();

        when(card.getCardDetails()).thenReturn(cardDetails);
        when(cardRepository.findById(cardId)).thenReturn(Optional.of(card));
        when(cardDetailsRepository.save(any(CardDetails.class))).thenReturn(cardDetails);

        // When
        CardDetails result = cardDetailsService.unblockCard(cardId);

        // Then
        assertNotNull(result);
        assertFalse(result.isBlocked());
        verify(cardRepository).findById(cardId);
        verify(cardDetailsRepository).save(cardDetails);
    }
}
