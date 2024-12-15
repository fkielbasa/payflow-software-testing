package com.example.payflow;

import com.example.payflow.dto.AccountNumberDTO;
import com.example.payflow.dto.AccountNumberRequestDto;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.User;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.repository.UserRepository;
import com.example.payflow.service.AccountNumberService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import com.example.payflow.model.CurrencyType;
import com.example.payflow.model.AccountNumberType;
import org.mockito.junit.jupiter.MockitoExtension;
import java.math.BigDecimal;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class AccountNumberServiceTests {
    @Mock
    private AccountNumberRepository accountNumberRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private AccountNumberService accountNumberService;

    @Test
    void givenUser_whenAddingNewAccountNumber_thenAccountNumberIsCreated() {
        // Given
        Long userId = 1L;
        User user = new User();
        user.setId(userId);

        AccountNumberRequestDto requestDto = new AccountNumberRequestDto(CurrencyType.USD, AccountNumberType.INTENSIVE);
        AccountNumber ac = AccountNumber.builder()
                .balance(new BigDecimal(100))
                .currency(CurrencyType.USD)
                .accountType(AccountNumberType.INTENSIVE)
                .userId(user)
                .build();

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(accountNumberRepository.save(any(AccountNumber.class))).thenReturn(ac);

        // When
        AccountNumberDTO result = accountNumberService.addAccount(userId, requestDto);

        // Then
        assertNotNull(result);
        assertEquals(ac.getBalance(), result.balance());
        assertEquals(ac.getCurrency(), result.currency());
        assertEquals(ac.getAccountType(), result.accountNumberType());

        verify(accountNumberRepository).save(any(AccountNumber.class));
    }

    @Test
    void givenExistingAccount_whenChangingAccountType_thenAccountTypeIsUpdated() {
        // Given
        Long accountId = 1L;
        AccountNumber ac = AccountNumber.builder()
                .id(accountId)
                .accountType(AccountNumberType.INTENSIVE)
                .build();

        when(accountNumberRepository.findById(accountId)).thenReturn(Optional.of(ac));

        // When
        accountNumberService.changeTypeOfAccount(accountId, AccountNumberType.STANDARD);

        // Then
        assertEquals(AccountNumberType.STANDARD, ac.getAccountType());

        verify(accountNumberRepository).save(ac);
    }
}
