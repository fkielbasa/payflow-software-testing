package com.example.payflow.integration;

import com.example.payflow.PayflowApplication;
import com.example.payflow.dto.PasswordDTO;
import com.example.payflow.dto.UserDTO;
import com.example.payflow.model.Address;
import com.example.payflow.service.UserService;
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

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = PayflowApplication.class)
class UserControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Autowired
    private ObjectMapper objectMapper;

    private UserDTO mockUserDTO;

    @BeforeEach
    void setUp() {
        Address address = new Address(1L, "Tarnowska", "123", "10", "12-345", "Tarnów", "POL");
        mockUserDTO = UserDTO.builder()
                .id(1L)
                .firstName("Jakub")
                .lastName("Jakubowski")
                .nationality("Poland")
                .dateOfBirth(LocalDate.of(1990, 1, 1))
                .login("jakunowsky")
                .email("jakubowski@example.com")
                .phoneNumber("123456789")
                .residentialAddress(address)
                .correspondenceAddress(address)
                .build();
    }

    @Test
    void getUserById_ShouldReturnUser_WhenUserExists() throws Exception {
        Mockito.when(userService.getUserById(eq(1L)))
                .thenReturn(mockUserDTO);

        mockMvc.perform(get("/api/v1/users/1"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(mockUserDTO)));
    }

    @Test
    void getAllUsers_ShouldReturnListOfUsers() throws Exception {
        Address address = new Address(2L, "Nowodąbrowska", "13", "1", "54-321", "Kraków", "POL");
        List<UserDTO> users = Arrays.asList(
                mockUserDTO,
                UserDTO.builder()
                        .id(2L)
                        .firstName("Grzegorz")
                        .lastName("Grzegowski")
                        .nationality("Poland")
                        .dateOfBirth(LocalDate.of(1985, 5, 15))
                        .login("grzegowsky")
                        .email("grzesiek@example.com")
                        .phoneNumber("987654321")
                        .residentialAddress(address)
                        .correspondenceAddress(address)
                        .build()
        );
        Mockito.when(userService.getAllUsers())
                .thenReturn(users);

        mockMvc.perform(get("/api/v1/users"))
                .andExpect(status().isOk())
                .andExpect(content().json(objectMapper.writeValueAsString(users)));
    }


}
