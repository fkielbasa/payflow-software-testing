# Test Case Documentation

### Testy manualne wykonane przez Jakub Dojka

### Test TC001

<br>

| ID  | TC001                              |
| ----|------------------------------------|
| **Tytuł** | Wymagane pola przy rejestracji. |
| **Warunki początkowe** | - Użytkownik niezalogowany.  <br> - Podstrona z rejestracją. |
| **Kroki testowe** | 1. Nie podawaj danych w formularzu. <br> 2. Kliknij "Prześlij". |
| **Oczekiwany rezultat** | Wyświetlenie komunikatu o wymaganych do wypełnienia polach. |

<br>

| ID  | TC002                                                                                                                                          |
| ----|------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Powodzenie przelewu na numer konta.                                                                                                            |
| **Warunki początkowe** | - Użytkownik zalogowany.  <br> - Użytkownik posiada wystarczająco dużo środków by dokonać przelew. <br> - Podstrona z przelewami.              |
| **Kroki testowe** | 1. Wybierz konto, z którego chcesz dokonać przelew. <br> 2. Wypełnij poprawnie formularz z przelewem na numer konta. <br> 3. Kliknij “Wyślij”. |
| **Oczekiwany rezultat** | Wyświetlenie komunikatu wysłaniu przelewu.                                                                                   |

<br>

| ID  | TC003                                                                                                                                          |
| ----|------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Niepowodzenie przelewu na numer konta.                                                                                                           |
| **Warunki początkowe** | - Użytkownik zalogowany.  <br> - Użytkownik nie posiada wystarczająco dużo środków by dokonać przelew. <br> - Podstrona z przelewami.             |
| **Kroki testowe** | 1. Wybierz konto, z którego chcesz dokonać przelew. <br> 2. Wypełnij poprawnie formularz z przelewem na numer konta, jednak podając kwotę wyższą niż dostępna. <br> 3. Kliknij “Wyślij”. |
| **Oczekiwany rezultat** | Wyświetlenie komunikatu o błędzie.                                                                                |

