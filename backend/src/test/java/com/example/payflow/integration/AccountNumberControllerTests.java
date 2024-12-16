package com.example.payflow.integration;

import com.example.payflow.PayflowApplication;
import com.example.payflow.dto.AccountNumberRequestDto;
import com.example.payflow.model.AccountNumber;
import com.example.payflow.model.AccountNumberType;
import com.example.payflow.model.CurrencyType;
import com.example.payflow.repository.AccountNumberRepository;
import com.example.payflow.security.JwtService;
import com.example.payflow.service.AccountNumberService;
import org.checkerframework.checker.units.qual.A;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;


import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.Mockito.verify;
import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.post;
import static org.springframework.test.util.AssertionErrors.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = PayflowApplication.class)
public class AccountNumberControllerTests {

    @MockBean
    private AccountNumberService accountNumberService;

    @Autowired
    private MockMvc mvc;

    @Test
    void shouldReturnOk_WhenAccountTypeIsChanged() throws Exception {
        Long accountId = 1L;
        AccountNumberType newType = AccountNumberType.STANDARD;

        mvc.perform(patch("/api/v1/numbers/{id}/type", accountId)
                        .param("type", newType.name()))
                        .andExpect(status().isOk());

        verify(accountNumberService).changeTypeOfAccount(accountId, newType);
    }
}
