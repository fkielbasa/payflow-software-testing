package com.example.payflow;

import com.example.payflow.dto.PasswordDTO;
import com.example.payflow.dto.UserDTO;
import com.example.payflow.dto.mapper.UserDTOMapper;
import com.example.payflow.model.User;
import com.example.payflow.repository.UserRepository;
import com.example.payflow.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private UserDTOMapper userDTOMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void changeUserPasswordWhenUserExists() {
        // Given
        Long userId = 1L;
        PasswordDTO passwordDTO = new PasswordDTO("newPassword");
        User user = new User();
        user.setId(userId);
        user.setPassword("oldPassword");

        UserDTO updatedUserDTO = new UserDTO();
        updatedUserDTO.setId(userId);

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(passwordEncoder.encode(passwordDTO.password())).thenReturn("encodedPassword");
        when(userDTOMapper.apply(user)).thenReturn(updatedUserDTO);

        System.out.println("=== Rozpoczęcie testu 'changeUserPasswordWhenUserExists' ===");
        System.out.println("Próba zmiany hasła dla użytkownika o ID: " + userId);
        System.out.println("Stare hasło użytkownika: " + user.getPassword());
        System.out.println("Nowe hasło do zakodowania: " + passwordDTO.password());

        // When
        UserDTO result = userService.changeUserPassword(userId, passwordDTO);

        System.out.println("Hasło użytkownika zostało zakodowane.");
        System.out.println("Nowe zakodowane hasło: " + user.getPassword());

        // Then
        assertNotNull(result);
        assertEquals(updatedUserDTO, result);
        verify(userRepository).save(user);
        assertEquals("encodedPassword", user.getPassword());

        System.out.println("Użytkownik został zapisany do bazy danych z nowym hasłem.");
        System.out.println("=== Zakończenie testu ===\n");
    }

    @Test
    void returnNullWhenUserDoesNotExist() {
        // Given
        Long userId = 1L;
        PasswordDTO passwordDTO = new PasswordDTO("newPassword");

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        System.out.println("=== Rozpoczęcie testu 'returnNullWhenUserDoesNotExist' ===");
        System.out.println("Próba zmiany hasła dla nieistniejącego użytkownika o ID: " + userId);

        // When
        UserDTO result = userService.changeUserPassword(userId, passwordDTO);

        // Then
        assertNull(result);
        verify(userRepository, never()).save(any(User.class));
        verify(passwordEncoder, never()).encode(anyString());

        System.out.println("Użytkownik o ID " + userId + " nie istnieje. Zwrócono null.");
        System.out.println("=== Zakończenie testu ===\n");

    }
}
