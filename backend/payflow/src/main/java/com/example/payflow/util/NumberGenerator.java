package com.example.payflow.util;


import java.util.Random;

/**
<<<<<<< Updated upstream
 * Klasa służąca do generowania różnych rodzajów numerów, takich jak BLIK, loginy, numery kont bankowych, CVV i numery kart kredytowych.
=======
 * Utility class for generating various types of numbers.
>>>>>>> Stashed changes
 */
public class NumberGenerator {

    public static final int BLIK_LENGTH = 6;
    public static final int LOGIN_LENGTH = 8;
    public static final int ACCOUNT_NUMBER_LENGTH = 26;
    public static final int CVV_LENGTH = 3;
    public static final int CARD_NUMBER_LENGTH = 16;
    private static Random random;
    private static StringBuilder stringBuilder;


    /**
<<<<<<< Updated upstream
     * Generuje kod BLIK składający się z 6 cyfr.
     *
     * @return Kod BLIK.
=======
     * Generates a BLIK code consisting of 6 digits.
     *
     * @return Generated BLIK code.
>>>>>>> Stashed changes
     */
    public static String generateBlikCode(){
        random = new Random();
        stringBuilder = new StringBuilder();
        for (int i = 0; i < BLIK_LENGTH; i++) {
            int randomNumber = random.nextInt(10); // 0-9
            stringBuilder.append(randomNumber);
        }
        return stringBuilder.toString();
    }
    /**
<<<<<<< Updated upstream
     * Generuje losowy login składający się z 8 cyfr.
     *
     * @return Losowy login.
     */
        public static String generateLogin(){
=======
     * Generates a random login consisting of 8 digits.
     *
     * @return Generated login.
     */
    public static String generateLogin(){
>>>>>>> Stashed changes
        random = new Random();
        stringBuilder = new StringBuilder();
        for (int i = 0; i < LOGIN_LENGTH; i++) {
            int randomNumber = random.nextInt(10); // 0-9
            stringBuilder.append(randomNumber);
        }
        return stringBuilder.toString();
    }
    /**
<<<<<<< Updated upstream
     * Generuje losowy numer konta bankowego składający się z 26 cyfr.
     *
     * @return Losowy numer konta bankowego.
=======
     * Generates a random account number consisting of 26 digits.
     *
     * @return Generated account number.
>>>>>>> Stashed changes
     */
    public static String generateAccountNumber(){
        random = new Random();
        stringBuilder = new StringBuilder();
        int firstDigit = random.nextInt(9) + 1;
        stringBuilder.append(firstDigit);
        for (int i = 0; i < ACCOUNT_NUMBER_LENGTH-1; i++) {
            int randomNumber = random.nextInt(10);
            stringBuilder.append(randomNumber);
        }
        return stringBuilder.toString();
    }
    /**
<<<<<<< Updated upstream
     * Generuje losowy CVV (Card Verification Value) składający się z 3 cyfr.
     *
     * @return Losowy CVV.
=======
     * Generates a random CVV consisting of 3 digits.
     *
     * @return Generated CVV.
>>>>>>> Stashed changes
     */
    public static String generateCVV() {
        Random random = new Random();
        StringBuilder stringBuilder = new StringBuilder();

        for (int i = 0; i < CVV_LENGTH; i++) {
            int randomNumber = random.nextInt(10);
            stringBuilder.append(randomNumber);
        }
        return stringBuilder.toString();
    }
    /**
<<<<<<< Updated upstream
     * Generuje losowy numer karty kredytowej składający się z 16 cyfr.
     *
     * @return Losowy numer karty kredytowej.
=======
     * Generates a random card number consisting of 16 digits.
     *
     * @return Generated card number.
>>>>>>> Stashed changes
     */
    public static String generateCardNumber() {
        Random random = new Random();
        StringBuilder stringBuilder = new StringBuilder();

        for (int i = 0; i < CARD_NUMBER_LENGTH; i++) {
            int randomNumber = random.nextInt(10);
            stringBuilder.append(randomNumber);
        }
        return stringBuilder.toString();
    }

}
