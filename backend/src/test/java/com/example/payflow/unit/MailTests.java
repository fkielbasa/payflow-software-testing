package com.example.payflow.unit;

import com.example.payflow.service.MailService;
import com.example.payflow.util.MailUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MailTests {

    private JavaMailSender mailSender;
    private MailService mailService;

    @BeforeEach
    void setUp() {
        mailSender = mock(JavaMailSender.class);
        mailService = new MailService(mailSender);

        try {
            var senderField = MailService.class.getDeclaredField("sender");
            senderField.setAccessible(true);
            senderField.set(mailService, "noreply@example.com");
        } catch (Exception e) {
            fail("Failed to set the sender field.");
        }
    }

    @Test
    void Should_send_registration_mail_successfully() {
        // Given
        String name = "Jakub Jakubowski";
        String to = "jakub.jakubowski@example.com";
        String login = "jakubowski";
        String sender = "noreply@example.com";

        String expectedText = "Hello, John Doe. Your login is johndoe.";
        mockStatic(MailUtils.class);
        when(MailUtils.getEmailMessage(name, login)).thenReturn(expectedText);

        ArgumentCaptor<SimpleMailMessage> messageCaptor = ArgumentCaptor.forClass(SimpleMailMessage.class);

        // When
        mailService.sendRegistrationMail(name, to, login);

        // Then
        verify(mailSender, times(1)).send(messageCaptor.capture());
        SimpleMailMessage sentMessage = messageCaptor.getValue();

        assertNotNull(sentMessage);
        assertEquals("Twoje konto zostało zarejestrowane!", sentMessage.getSubject());
        assertEquals(sender, sentMessage.getFrom());
        assertEquals(to, sentMessage.getTo()[0]);
        assertEquals(expectedText, sentMessage.getText());
    }
}
