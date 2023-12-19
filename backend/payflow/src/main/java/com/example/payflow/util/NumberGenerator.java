package com.example.payflow.util;

import java.util.Random;

public class NumberGenerator {

    public static final int BLIK_LENGTH = 6;
    public static final int LOGIN_LENGTH = 8;
    public static final int ACCOUNT_NUMBER_LENGTH = 26;
    private static Validation validation;
    private static Random random;
    private static StringBuilder stringBuilder;

    public static String generateBlikCode(){
        random = new Random();
        stringBuilder = new StringBuilder();
        for (int i = 0; i < BLIK_LENGTH; i++) {
            int randomNumber = random.nextInt(10); // 0-9
            stringBuilder.append(randomNumber);
        }
        return stringBuilder.toString();
    }

        public static String generateLogin(){
        random = new Random();
        stringBuilder = new StringBuilder();
        for (int i = 0; i < LOGIN_LENGTH; i++) {
            int randomNumber = random.nextInt(10); // 0-9
            stringBuilder.append(randomNumber);
        }
        if (!validation.isLoginValid(stringBuilder.toString())){
            return generateLogin();
        }
        return stringBuilder.toString();
    }

    public static String generateAccountNumber(){
        random = new Random();
        stringBuilder = new StringBuilder();

        int firstDigit = random.nextInt(9) + 1;
        stringBuilder.append(firstDigit);

        for (int i = 0; i < ACCOUNT_NUMBER_LENGTH-1; i++) {
            int randomNumber = random.nextInt(10);
            stringBuilder.append(randomNumber);
        }
        if (!validation.isAccountNumberValid(stringBuilder.toString())){
            return generateAccountNumber();
        }
        return stringBuilder.toString();
    }
}
