package com.example.payflow.unit;

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

class UserServiceTests {

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
    void Change_user_password_when_user_exists() {
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

        // When
        UserDTO result = userService.changeUserPassword(userId, passwordDTO);

        // Then
        assertNotNull(result);
        assertEquals(updatedUserDTO, result);
        verify(userRepository).save(user);
        assertEquals("encodedPassword", user.getPassword());
    }

    @Test
    void Return_null_when_user_does_not_exist() {
        // Given
        Long userId = 1L;
        PasswordDTO passwordDTO = new PasswordDTO("newPassword");

        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        // When
        UserDTO result = userService.changeUserPassword(userId, passwordDTO);

        // Then
        assertNull(result);
        verify(userRepository, never()).save(any(User.class));
        verify(passwordEncoder, never()).encode(anyString());
    }
}
