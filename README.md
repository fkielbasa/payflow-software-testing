
# Testowanie i Jakość Oprogramowania

### Temat projektu: Aplikacja bankowa "PayFlow"

### Autorzy:

- Filip Kiełbasa [@fkielbasa](https://github.com/fkielbasa)
- Jakub Dojka [@Narothe](https://github.com/Narothe)

### Opis projektu:

PayFlow to aplikacja bankowa umożliwiająca użytkownikom wykonywanie typowych operacji finansowych.

Główne funkcjonalności:

- Przelewy tradycyjne, na numer telefonu, BLIK,

- Historia transakcji

- Kredyty

- Kantor wymiany walut

- Zarządzanie rachunkami

- Zarządzanie kartami

- Zarządzanie kontem

### Uruchomienie projektu:

#### Backend (Spring Boot):

- W ścieżce `\backend` uruchomić polecenie: **mvn spring-boot:run** lub uruchomić plik `\backend\start.bat`

#### Frontend (ReactJS):

- W ścieżce `\frontend` uruchomić polecenie **npm install**, a następnie **npm start**

### Testy:

#### W projekcie zaimplementowane są dwa rodzaje testów: testy jednostkowe i testy integracyjne.

- [Testy integracyjne](backend/src/test/java/com/example/payflow/integration) `backend/src/test/java/com/example/payflow/integration`

- [Testy jednostkowe](backend/src/test/java/com/example/payflow/unit) `backend/src/test/java/com/example/payflow/unit`

### Dokumentacja API:

#### Po uruchomieniu serwera dokumentacja dostępna jest pod adresem: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

### Testy manualne 

#### Testy manualne wykonane przez Jakub Dojka

| ID  | TC001                              |
| ----|------------------------------------|
| **Tytuł** | Wymagane pola przy rejestracji. |
| **Warunki początkowe** | - Użytkownik niezalogowany.  <br> - Podstrona z rejestracją. |
| **Kroki testowe** | 1. Nie podawaj danych w formularzu. <br> 2. Kliknij "Prześlij". |
| **Oczekiwany rezultat** | Wyświetlenie komunikatu o wymaganych do wypełnienia polach. |

| ID  | TC002                                                                                                                                          |
| ----|------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Powodzenie przelewu na numer konta.                                                                                                            |
| **Warunki początkowe** | - Użytkownik zalogowany.  <br> - Użytkownik posiada wystarczająco dużo środków by dokonać przelew. <br> - Podstrona z przelewami.              |
| **Kroki testowe** | 1. Wybierz konto, z którego chcesz dokonać przelew. <br> 2. Wypełnij poprawnie formularz z przelewem na numer konta. <br> 3. Kliknij “Wyślij”. |
| **Oczekiwany rezultat** | Wyświetlenie komunikatu wysłaniu przelewu.                                                                                   |


| ID  | TC003                                                                                                                                          |
| ----|------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Niepowodzenie przelewu na numer konta.                                                                                                           |
| **Warunki początkowe** | - Użytkownik zalogowany.  <br> - Użytkownik nie posiada wystarczająco dużo środków by dokonać przelew. <br> - Podstrona z przelewami.             |
| **Kroki testowe** | 1. Wybierz konto, z którego chcesz dokonać przelew. <br> 2. Wypełnij poprawnie formularz z przelewem na numer konta, jednak podając kwotę wyższą niż dostępna. <br> 3. Kliknij “Wyślij”. |
| **Oczekiwany rezultat** | Wyświetlenie komunikatu o błędzie.                                                                                |


| ID  | TC004                                                                                                         |
| ----|---------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Wyświetlenie szczegółów transakcji.                                                                           |
| **Warunki początkowe** | - Użytkownik zalogowany.  <br> - Konto posiada historię przelewów. <br> - Podstrona z szczegółami transakcji. |
| **Kroki testowe** | 1. Kliknij na istniejący przelew.                                                                             |
| **Oczekiwany rezultat** | Wyświetlenie szczegółów transakcji.                                                                           |


| ID  | TC005                                                                                                        |
| ----|---------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Wygenerowanie numeru Blik.                                                                        |
| **Warunki początkowe** | - Użytkownik zalogowany.  <br> - Podstrona z przelewami.|
| **Kroki testowe** | 1. Kliknij na przycisk “Wygeneruj blik”.                                                                           |
| **Oczekiwany rezultat** | Wygenerowanie sześciocyfrowego unikatowego numeru blik, którego ważność trwa dwie minuty.                                                                         |


| ID  | TC006                                                                                                      |
| ----|---------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Utworzenie nowej karty.                                                                      |
| **Warunki początkowe** | - Użytkownik zalogowany.  <br> - Podstrona z rachunkami dla konkretnej waluty.|
| **Kroki testowe** | 1. Kliknij w przycisk plusa z prawej strony.                                                                         |
| **Oczekiwany rezultat** | Wygenerowanie nowej karty z prawidłowym numerem karty, CVV, ważnością karty, środkami na koncie.                                                                       |


| ID  | TC007                                                                                                                                             |
| ----|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Dodawanie nowego konta.                                                                                                                           |
| **Warunki początkowe** | - Użytkownik zalogowany. <br> - Strona główna. <br> - Użytkownik posiada minimum jedno konto i mniej niż 3 konta.                                 |
| **Kroki testowe** | 1. Kliknij w przycisk plusa, znajdujący się w górnej sekcji głównego ekranu. <br> 2. Uzupełnij formularz o rodzaj waluty oraz typ konta. <br> 3. Kliknij w przycisk “Dodaj konto bankowe”. |
| **Oczekiwany rezultat** | Utworzenie nowego konta bankowego o unikalnym numerze konta.                                                |


| ID  | TC008                                                                                                                                                                                      |
| ----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Zmiana waluty                                                                                                                                                                              |
| **Warunki początkowe** | - Użytkownik zalogowany. <br> - Podstrona z kantorem. <br> - Użytkownik posiada więcej niż jedno konto, przy czym minimum jedno konto w innej walucie. <br> - Użytkownik posiada wystarczającą kwotę na koncie, na którym chce dokonać wymiany walut.                             |
| **Kroki testowe** | 1. Wybierz z listy konta bankowe, dla których chcesz dokonać wymiany walut. <br> 2. Wprowadź w formularz kwotę, którą chcesz przesłać. <br> 3. Kliknij przycisk “Prześlij”. |
| **Oczekiwany rezultat** | Kwota została odjęta z jednego konta, wartość jej została zmieniona na walutę odpowiadającą na drugim koncie.                                                                                                                             |


| ID  | TC009                                                                                                                                                                      |
| ----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Wzięcie kredytu                                                                                                                                                            |
| **Warunki początkowe** | - Użytkownik zalogowany. <br> - Podstrona z kredytami. <br> - Użytkownik posiada minimum jedno konto.                                                                      |
| **Kroki testowe** | 1. Wybierz z listy konto bankowe, na które chcesz wziąć kredyt. <br> 2. Wprowadź w formularz kwotę, którą chcesz uzyskać. <br> 3. Wybierz suwakiem okres kredytu. <br> 4. Kliknij przycisk “Prześlij”. |
| **Oczekiwany rezultat** | Kredyt został przyznany na wybrane konto bankowe. Operacja sygnalizuje powodzenie poprzez odpowiedni komunikat.                                                           |


| ID  | TC010                                                                                                                                                                    |
| ----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Aktywacja karty przy użyciu pin-u.                                                                                                                                                           |
| **Warunki początkowe** | - Użytkownik zalogowany. <br> - Podstrona z rachunkowością. <br> - Użytkownik posiada minimum jeden rachunek.                                                                     |
| **Kroki testowe** | 1. Wybierz rachunek bankowy. <br> 2. Kliknij “Aktywuj kartę”. <br> 3. W nowe pole podaj czterocyfrowy pin do karty. <br> 4. Kliknij przycisk “Wyślij”. |
| **Oczekiwany rezultat** | Karta zostaje aktywowana.                                                        |


#### Testy manualne wykonane przez Filip Kiełbasa


| ID  | TC011                                                                                                                                                |
| ----|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Logowanie z nieprawidłowymi danymi                                                                                                                   |
| **Warunki początkowe** | Użytkownik jest nie zalogowany i znajduje się na stronie logowania                                      |
| **Kroki testowe** | 1. Wprowadź nieprawidłowy login lub hasło <br> 2. Kliknij przycisk “Zaloguj się”|
| **Oczekiwany rezultat** | Na ekranie pojawia się komunikat „Nieprawidłowy login lub hasło”.                                                                                                                          |


| ID  | TC012                                                                                                                      |
| ----|----------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Logowanie z poprawnymi danymi                                                                                              |
| **Warunki początkowe** | Użytkownik jest nie zalogowany i znajduje się na stronie logowania                                                         |
| **Kroki testowe** | 1. Wprowadź poprawny login i hasło <br> 2. Kliknij przycisk “Zaloguj się”                                                  |
| **Oczekiwany rezultat** | 1. Użytkownik zostaje przekierowany na stronę główną aplikacji. <br> 2. Token autoryzacji zostaje zapisany w localStorage. |


| ID  | TC013                                                                                                                     |
| ----|----------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Przejście do szczegółów rachunku z strony głównej                                                                                           |
| **Warunki początkowe** | Użytkownik jest zalogowany i znajduje się na stronie głównej.                                                        |
| **Kroki testowe** | 1. Kliknij w wybrany rachunek. <br> 2. Kliknij w tekst “Szczegóły”.                                                |
| **Oczekiwany rezultat** | Użytkownik zostaje przeniesiony na podstronę “rachunki”. |


| ID  | TC014                                                                                                                                               |
| ----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Przejście do szczegółów rachunku z menu bocznego.                                                                                                   |
| **Warunki początkowe** | 1. Użytkownik jest zalogowany i znajduje się na dowolnej stronie. <br> 2. Co najmniej jeden rachunek jest dostępny do wybrania w sekcji „Rachunki”. |
| **Kroki testowe** | 1. Kliknij na sekcję „Rachunki” w menu bocznym, aby ją rozwinąć. <br> 2. Wybierz dowolny rachunek z rozwiniętej listy.                              |
| **Oczekiwany rezultat** | Użytkownik zostaje przekierowany na stronę szczegółów wybranego rachunku.                                                                           |


| ID  | TC015                                                                                                                                               |
| ----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Wykonanie przelewu na nieistniejący numer telefonu                                                                                                  |
| **Warunki początkowe** | 1. Użytkownik jest zalogowany i znajduje się na stronie przelewów. <br> 2. Użytkownik posiada wystarczające środki na koncie do wykonania przelewu. |
| **Kroki testowe** | 1. Wprowadź w formularzu przelewu numer telefonu, który nie istnieje w systemie. <br> 2. Wprowadź kwotę przelewu oraz opcjonalny opis. <br> 3. Kliknij przycisk „Wyślij”.     |
| **Oczekiwany rezultat** | System wyświetla komunikat błędu: “Wysłanie przelewu nie powiodło się”.                                                               |


| ID  | TC016                                                                                                                                                |
| ----|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Wprowadzenie numeru telefonu w złym formacie.                                                                                                  |
| **Warunki początkowe** | 1. Użytkownik jest zalogowany i znajduje się na stronie przelewów. <br> 2. Użytkownik posiada wystarczające środki na koncie do wykonania przelewu. |
| **Kroki testowe** | 1. Wprowadź w formularzu przelewu numer telefonu, który zawiera inną liczbę cyfr niż 9. <br> 2. Wprowadź kwotę przelewu oraz opcjonalny opis. <br> 3. Kliknij przycisk „Wyślij”.   |
| **Oczekiwany rezultat** | System wyświetla komunikat błędu: “Podaj dobre dane”.                                                     |


| ID  | TC017                                                                                                                                                                            |
| ----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Obrót karty                                                                                                                                                                      |
| **Warunki początkowe** | 1. Użytkownik jest zalogowany i znajduje się na stronie kart. <br> 2. Użytkownik posiada przynajmniej jedną kartę.                            |
| **Kroki testowe** | 1. Wybierz kartę. <br> 2. Kliknij w dowolnym miejscu na karcie. |
| **Oczekiwany rezultat** | Karta obraca się o 180 stopni.                                                                                                                 |


| ID  | TC018                                                                                                |
| ----|------------------------------------------------------------------------------------------------------|
| **Tytuł** | Poprawna zmiana kodu pin karty.                                                                      |
| **Warunki początkowe** | 1. Użytkownik jest zalogowany i znajduje się na stronie rachunki. <br> 2. Użytkownik wybrał rachunek |
| **Kroki testowe** | 1. Kliknij w przycisk “Zmień pin” <br> 2. Wprowadź pin w alercie. <br> 3. Kliknij w przycisk “Wyślij”                           |
| **Oczekiwany rezultat** | Pin zostaje zmieniony.                                                                    |


| ID  | TC019                                                                               |
| ----|-------------------------------------------------------------------------------------|
| **Tytuł** | Poprawne wylogowanie użytkownika.                                                   |
| **Warunki początkowe** | Użytkownik jest zalogowany i znajduje się na dowolnej stronie.                      |
| **Kroki testowe** | 1. Kliknij w nazwę konta. <br> 2. Kliknij w przycisk “Wyloguj” w rozwijanej liście. |
| **Oczekiwany rezultat** | 1. Użytkownik zostaje wylogowany i przeniesiony do strony logowania. <br> 2. Token autoryzacyjny zostaje usunięty z localStorage.       |


| ID  | TC020                                                                                                                                    |
| ----|------------------------------------------------------------------------------------------------------------------------------------------|
| **Tytuł** | Próba zmiany hasła na hasło niespełniające wymogów silnego hasła.                                                                        |
| **Warunki początkowe** | Użytkownik jest zalogowany i znajduje się w zakładce Konto.                                                                              |
| **Kroki testowe** | 1. Podaj hasło nie zawierające:  <br> - przynajmniej osiem znaków <br> - duże i małe litery <br> - cyfry <br> - znaki specjalne <br> 2. Kliknij w przycisk “Prześlij”.  |
| **Oczekiwany rezultat** | W zależności od wprowadzonego hasła, aplikacja wyświetla odpowiedni poziom siły podanego hasła.    |

### Technologie użyte w projekcie:

#### Backend

- Spring Boot

- Spring Security

- Spring Data JPA

- Maven

- JUnit

- Mockito

- Swagger

- PostgreSQL

#### Frontend

- React

- Redux

- Axios

- Material-UI

- Npm