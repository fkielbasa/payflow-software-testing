package com.example.payflow.mail;

public class MailUtils {

    public static String getEmailMessage(String name, String login) {
        return "Cześć " + name + ",\n\n" +
                "Właśnie zarejestrowałeś się w naszym banku Payflow.\n" +
                "Twój login to: "+login+", aby zalogować się kliknij w link poniżej. \n\n" +
                "http://localhost:3000/login" + "\n\nPayflow";
    }
}
