# Test Case Documentation

### Testy manualne wykonane przez Jakub Dojka

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

<br>

| ID  | TC004                                                                                                         |
| ----|---------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Wyświetlenie szczegółów transakcji.                                                                           |
| **Warunki początkowe** | - Użytkownik zalogowany.  <br> - Konto posiada historię przelewów. <br> - Podstrona z szczegółami transakcji. |
| **Kroki testowe** | 1. Kliknij na istniejący przelew.                                                                             |
| **Oczekiwany rezultat** | Wyświetlenie szczegółów transakcji.                                                                           |

<br>

| ID  | TC005                                                                                                        |
| ----|---------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Wygenerowanie numeru Blik.                                                                        |
| **Warunki początkowe** | - Użytkownik zalogowany.  <br> - Podstrona z przelewami.|
| **Kroki testowe** | 1. Kliknij na przycisk “Wygeneruj blik”.                                                                           |
| **Oczekiwany rezultat** | Wygenerowanie sześciocyfrowego unikatowego numeru blik, którego ważność trwa dwie minuty.                                                                         |

<br>

| ID  | TC006                                                                                                      |
| ----|---------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Utworzenie nowej karty.                                                                      |
| **Warunki początkowe** | - Użytkownik zalogowany.  <br> - Podstrona z rachunkami dla konkretnej waluty.|
| **Kroki testowe** | 1. Kliknij w przycisk plusa z prawej strony.                                                                         |
| **Oczekiwany rezultat** | Wygenerowanie nowej karty z prawidłowym numerem karty, CVV, ważnością karty, środkami na koncie.                                                                       |

<br>

| ID  | TC007                                                                                                                                             |
| ----|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Dodawanie nowego konta.                                                                                                                           |
| **Warunki początkowe** | - Użytkownik zalogowany. <br> - Strona główna. <br> - Użytkownik posiada minimum jedno konto i mniej niż 3 konta.                                 |
| **Kroki testowe** | 1. Kliknij w przycisk plusa, znajdujący się w górnej sekcji głównego ekranu. <br> 2. Uzupełnij formularz o rodzaj waluty oraz typ konta. <br> 3. Kliknij w przycisk “Dodaj konto bankowe”. |
| **Oczekiwany rezultat** | Utworzenie nowego konta bankowego o unikalnym numerze konta.                                                |

<br>

| ID  | TC008                                                                                                                                                                                      |
| ----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Zmiana waluty                                                                                                                                                                              |
| **Warunki początkowe** | - Użytkownik zalogowany. <br> - Podstrona z kantorem. <br> - Użytkownik posiada więcej niż jedno konto, przy czym minimum jedno konto w innej walucie. <br> - Użytkownik posiada wystarczającą kwotę na koncie, na którym chce dokonać wymiany walut.                             |
| **Kroki testowe** | 1. Wybierz z listy konta bankowe, dla których chcesz dokonać wymiany walut. <br> 2. Wprowadź w formularz kwotę, którą chcesz przesłać. <br> 3. Kliknij przycisk “Prześlij”. |
| **Oczekiwany rezultat** | Kwota została odjęta z jednego konta, wartość jej została zmieniona na walutę odpowiadającą na drugim koncie.                                                                                                                             |

<br>

| ID  | TC009                                                                                                                                                                      |
| ----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Wzięcie kredytu                                                                                                                                                            |
| **Warunki początkowe** | - Użytkownik zalogowany. <br> - Podstrona z kredytami. <br> - Użytkownik posiada minimum jedno konto.                                                                      |
| **Kroki testowe** | 1. Wybierz z listy konto bankowe, na które chcesz wziąć kredyt. <br> 2. Wprowadź w formularz kwotę, którą chcesz uzyskać. <br> 3. Wybierz suwakiem okres kredytu. <br> 4. Kliknij przycisk “Prześlij”. |
| **Oczekiwany rezultat** | Kredyt został przyznany na wybrane konto bankowe. Operacja sygnalizuje powodzenie poprzez odpowiedni komunikat.                                                           |

<br>

| ID  | TC010                                                                                                                                                                    |
| ----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Aktywacja karty przy użyciu pin-u.                                                                                                                                                           |
| **Warunki początkowe** | - Użytkownik zalogowany. <br> - Podstrona z rachunkowością. <br> - Użytkownik posiada minimum jeden rachunek.                                                                     |
| **Kroki testowe** | 1. Wybierz rachunek bankowy. <br> 2. Kliknij “Aktywuj kartę”. <br> 3. W nowe pole podaj czterocyfrowy pin do karty. <br> 4. Kliknij przycisk “Wyślij”. |
| **Oczekiwany rezultat** | Karta zostaje aktywowana.                                                        |

<br>

### Testy manualne wykonane przez Filip Kiełbasa

<br>

| ID  | TC011                                                                                                                                                |
| ----|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Logowanie z nieprawidłowymi danymi                                                                                                                   |
| **Warunki początkowe** | Użytkownik jest nie zalogowany i znajduje się na stronie logowania                                      |
| **Kroki testowe** | 1. Wprowadź nieprawidłowy login lub hasło <br> 2. Kliknij przycisk “Zaloguj się”|
| **Oczekiwany rezultat** | Na ekranie pojawia się komunikat „Nieprawidłowy login lub hasło”.                                                                                                                          |

<br>

| ID  | TC012                                                                                                                      |
| ----|----------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Logowanie z poprawnymi danymi                                                                                              |
| **Warunki początkowe** | Użytkownik jest nie zalogowany i znajduje się na stronie logowania                                                         |
| **Kroki testowe** | 1. Wprowadź poprawny login i hasło <br> 2. Kliknij przycisk “Zaloguj się”                                                  |
| **Oczekiwany rezultat** | 1. Użytkownik zostaje przekierowany na stronę główną aplikacji. <br> 2. Token autoryzacji zostaje zapisany w localStorage. |

<br>

| ID  | TC013                                                                                                                     |
| ----|----------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Przejście do szczegółów rachunku z strony głównej                                                                                           |
| **Warunki początkowe** | Użytkownik jest zalogowany i znajduje się na stronie głównej.                                                        |
| **Kroki testowe** | 1. Kliknij w wybrany rachunek. <br> 2. Kliknij w tekst “Szczegóły”.                                                |
| **Oczekiwany rezultat** | Użytkownik zostaje przeniesiony na podstronę “rachunki”. |
