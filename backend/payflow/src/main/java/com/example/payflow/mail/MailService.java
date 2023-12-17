package com.example.payflow.mail;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class MailService {

    public static final String NEW_USER_ACCOUNT_REGISTERING = "Twoje konto zostało zarejestrowane!";
    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String sender;

    public void sendRegistrationMail(String name, String to, String login){
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setSubject(NEW_USER_ACCOUNT_REGISTERING);
            message.setFrom(sender);
            message.setTo(to);
            message.setText(MailUtils.getEmailMessage(name, login));
            mailSender.send(message);
        }catch (Exception e) {
            System.out.println(e.getMessage());
            throw new RuntimeException(e.getMessage());
        }
    }
}
