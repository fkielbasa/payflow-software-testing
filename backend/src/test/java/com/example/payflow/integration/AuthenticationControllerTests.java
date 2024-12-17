package com.example.payflow.integration;

import com.example.payflow.PayflowApplication;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = PayflowApplication.class)
public class AuthenticationControllerTests {

    @Autowired
    private MockMvc mockMvc;
    String requestBody = """
                {
                  "firstName": "Janek",
                  "lastName": "Down",
                  "dateOfBirth": "1985-06-15",
                  "nationality": "Polish",
                  "phoneNumber": "+12123456789",
                  "zipCode": "00-001",
                  "city": "Warsaw",
                  "street": "Tarnowska",
                  "homeNumber": "10",
                  "apartmentNumber": "5",
                  "countryAddress": "Poland",
                  "zipCodeCorrespondence": "00-002",
                  "cityCorrespondence": "Warsaw",
                  "streetCorrespondence": "Marszałkowska",
                  "homeNumberCorrespondence": "15",
                  "apartmentNumberCorrespondence": "10",
                  "countryAddressCorrespondence": "Poland",
                  "accountType": "STANDARD",
                  "password": "weirdPassword123"
                }
            """;


    @Test
    void shouldReturnOkAndGetToken_whenRegisterIsSuccessful() throws Exception {
        // When
        String requestBody = """
                {
                    "login": "1",
                    "password": "1"
                }
                """;

        // When
        ResultActions result =  mockMvc.perform(post("/api/v1/auth/authenticate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestBody));

        // Then
        result.andExpect(status().isOk())
                .andExpect(jsonPath("$.token").isNotEmpty())
                .andReturn();
    }
    @Test
    void shouldReturnNotAcceptable_whenEmailAlreadyExists() throws Exception {
        // given
        String request = requestBody + """
                ,"password": "weirdPassword123",
                "email": "grzechu@gmail.com"
            }""";
        // when
        ResultActions result = mockMvc.perform(post("/api/v1/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request));
        // Then
        result.andExpect(status().isNotAcceptable());
    }
    @Test
    void shouldReturnNotAcceptable_whenPasswordTooShort() throws Exception {
        // given
        String request = requestBody + """
                ,"password": "short",
                "email": "newemail@gmail.com"
            }""";

        // when
        mockMvc.perform(post("/api/v1/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request))
                .andExpect(status().isNotAcceptable());
    }
}
