package com.example.payflow.mail;

public class MailUtils {

    public static String getEmailMessage(String name, String host, String login) {
        return "Cześć " + name + ",\n\n" +
                "Właśnie zarejestrowałeś się w naszym banku Payflow," +
                "twój login to: "+login+", aby zalogować się kliknij w link poniżej. \n\n" +
                host + "\n\nPayflow";
    }
}
