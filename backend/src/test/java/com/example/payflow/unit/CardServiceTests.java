package com.example.payflow.unit;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import com.example.payflow.dto.CardDTO;
import com.example.payflow.dto.mapper.CardDTOMapper;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.Card;
import com.example.payflow.model.CardDetails;
import com.example.payflow.model.CurrencyType;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.CardDetailsRepository;
import com.example.payflow.repository.CardRepository;
import com.example.payflow.service.CardService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
public class CardServiceTests {

    @Mock
    private CardRepository cardRepository;

    @Mock
    private AccountNumberRepository accountNumberRepository;

    @Mock
    private CardDetailsRepository cardDetailsRepository;

    @Mock
    private CardDTOMapper cardDTOMapper;

    @InjectMocks
    private CardService cardService;


    @Test
    void givenExistingAccount_whenCreatingCard_thenCardIsCreatedSuccessfully() {
        // GIVEN
        Long accountId = 1L;
        AccountNumber accountNumber = mock(AccountNumber.class);
        when(accountNumberRepository.findById(accountId)).thenReturn(Optional.of(accountNumber));

        Card card = Card.builder()
                .id(1L)
                .cardNumber("1234567890123456")
                .cvv("123")
                .validDate(LocalDate.now().plusYears(4))
                .build();
        when(cardRepository.save(any(Card.class))).thenReturn(card);

        CardDetails expectedCardDetails = CardDetails.builder()
                .idCard(card)
                .active(false)
                .blocked(false)
                .build();
        when(cardDetailsRepository.save(any(CardDetails.class))).thenReturn(expectedCardDetails);

        CardDTO expectedCardDTO = new CardDTO(1L, "1234567890123456", LocalDate.now().plusYears(4), "123", false, false, null, BigDecimal.ZERO, CurrencyType.USD, 1L);
        when(cardDTOMapper.apply(any(Card.class))).thenReturn(expectedCardDTO);

        // WHEN
        CardDTO result = cardService.createCard(accountId);

        // THEN
        assertNotNull(result);
        assertEquals("1234567890123456", result.getCardNumber());
        assertEquals("123", result.getCvv());
        assertEquals(LocalDate.now().plusYears(4), result.getValidDate());

        verify(accountNumberRepository).findById(accountId);
        verify(cardRepository).save(any(Card.class));
        verify(cardDetailsRepository).save(any(CardDetails.class));
        verify(cardDTOMapper).apply(any(Card.class));
    }

    @Test
    void givenNonExistentAccount_whenCreatingCard_thenCardCreationFails() {
        // GIVEN
        Long accountId = 1L;
        when(accountNumberRepository.findById(accountId)).thenReturn(Optional.empty());

        // WHEN
        CardDTO result = cardService.createCard(accountId);

        // THEN
        assertNull(result);
        verify(accountNumberRepository).findById(accountId);
        verifyNoInteractions(cardRepository);
        verifyNoInteractions(cardDetailsRepository);
    }
}
