package com.example.payflow.integration;

import com.example.payflow.PayflowApplication;
import com.example.payflow.dto.EmailDTO;
import com.example.payflow.dto.PhoneNumberDTO;
import com.example.payflow.model.UserDetails;
import com.example.payflow.service.UserDetailsServices;
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

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = PayflowApplication.class)
class UserDetailsControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserDetailsServices userDetailsServices;

    @Autowired
    private ObjectMapper objectMapper;

    private UserDetails mockUserDetails;

    @BeforeEach
    void setUp() {
        mockUserDetails = UserDetails.builder()
                .id(1L)
                .email("new_email@example.com")
                .phoneNumber("123456789")
                .build();
    }

    @Test
    void changeUserEmail_ShouldReturnOk_WhenEmailIsValid() throws Exception {
        // given
        Mockito.when(userDetailsServices.changeUserEmail(eq(1L), any(EmailDTO.class)))
                .thenReturn(mockUserDetails);
        EmailDTO emailDTO = new EmailDTO("new_email@example.com");

        // when
        var resultActions = mockMvc.perform(patch("/api/v1/user/1/email")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(emailDTO)));

        // then
        resultActions.andExpect(status().isOk())
                .andExpect(content().string("Email successfully changed."));
    }

    @Test
    void changeUserPhoneNumber_ShouldReturnBadRequest_WhenPhoneNumberIsInvalid() throws Exception {
        // given
        Mockito.when(userDetailsServices.changeUserPhoneNumber(eq(1L), any(PhoneNumberDTO.class)))
                .thenReturn(null);
        PhoneNumberDTO phoneNumberDTO = new PhoneNumberDTO("987654321");

        // when
        var resultActions = mockMvc.perform(patch("/api/v1/user/1/phone-number")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(phoneNumberDTO)));

        // then
        resultActions.andExpect(status().isBadRequest())
                .andExpect(content().string("Invalid body or phone number already exists."));
    }
}
