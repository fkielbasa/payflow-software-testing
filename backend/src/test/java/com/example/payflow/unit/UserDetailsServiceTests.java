package com.example.payflow.unit;

import com.example.payflow.dto.EmailDTO;
import com.example.payflow.dto.PhoneNumberDTO;
import com.example.payflow.model.User;
import com.example.payflow.model.UserDetails;
import com.example.payflow.repository.UserDetailsRepository;
import com.example.payflow.repository.UserRepository;
import com.example.payflow.service.UserDetailsServices;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserDetailsServiceTests {

    @InjectMocks
    private UserDetailsServices userDetailsServices;

    @Mock
    private UserDetailsRepository userDetailsRepository;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void Should_change_user_email_when_valid() {
        // Given
        Long userId = 1L;
        String newEmail = "new.email@example.com";
        EmailDTO emailDTO = new EmailDTO(newEmail);

        User user = new User();
        UserDetails userDetails = new UserDetails();
        user.setUserDetails(userDetails);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(userDetailsRepository.isEmailExists(newEmail)).thenReturn(false);

        // When
        UserDetails result = userDetailsServices.changeUserEmail(userId, emailDTO);

        // Then
        assertNotNull(result);
        assertEquals(newEmail, result.getEmail());
        verify(userDetailsRepository, times(1)).save(userDetails);
    }

    @Test
    void Should_return_null_when_phone_number_already_exists() {
        // Given
        Long userId = 1L;
        String existingPhoneNumber = "1234567890";
        PhoneNumberDTO phoneNumberDTO = new PhoneNumberDTO(existingPhoneNumber);

        User user = new User();
        UserDetails userDetails = new UserDetails();
        user.setUserDetails(userDetails);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(userDetailsRepository.isPhoneNumberExists(existingPhoneNumber)).thenReturn(true);

        // When
        UserDetails result = userDetailsServices.changeUserPhoneNumber(userId, phoneNumberDTO);

        // Then
        assertNull(result);
        verify(userDetailsRepository, never()).save(any());
    }
}
