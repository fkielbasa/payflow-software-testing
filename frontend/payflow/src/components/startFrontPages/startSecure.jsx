import { FaExclamationTriangle } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { MdCreditCardOff } from "react-icons/md";
import StartSecureCss from './startSecure.module.css'

const StartSecure = () => {

    return(
        <div>
            <div className={StartSecureCss.icons} >
                <MdCreditCardOff />
                <FaExclamationTriangle />
                <ImBlocked />

            </div>
            <div>
                <h3>Zgubiona karta, telefon lub dokument</h3>
                <p>Nie mogę znaleźć karty lub ktoś mi ją ukradł, co mam zrobić?</p>
                <ul>
                    <li><b>tymczasowo zablokuj kartę</b><br/>
                        Skorzystaj z tymczasowej blokady, gdy nie masz pewności, gdzie jest Twoja karta. Jeśli znajdziesz kartę, w każdej chwili możesz ją odblokować i dalej z niej korzystać.</li>
                    <li><b>zastrzeż kartę</b><br/>
                        Zastrzeż kartę, gdy obawiasz się, że ktoś może z niej skorzystać (np. ktoś Ci ją ukradł lub podejrzewasz, że ktoś zdobył dane Twojej karty oraz w sytuacji gdy ktoś znalazł Twoją kartę i Ci ją oddał - w takiej sytuacji również rozważ zastrzeżenie karty, ponieważ taka osoba zna dane Twojej karty i może je wykorzystać bez Twojej wiedzy). Zastrzeżenie karty jest nieodwracalne – nikt już z niej nie skorzysta.</li>
                </ul>
            </div>
            <div>
                <h3>Ktoś wykorzystał moje dane</h3>
                <p>Zniknęły pieniądze z mojego konta, co mam zrobić?</p>
                <ul>
                    <li><b>sprawdź historię operacji</b><br/>
                        Upewnij się, czy w ostatnich dniach nie zrealizowaliśmy Twojego zlecania stałego (np. płatności za subskrypcje, abonament) lub polecenia zapłaty. A może zaakceptowałeś/zaakceptowałaś propozycję asystenta płatności lub pełnomocnik do Twojego konta wypłacił pieniądze z bankomatu? </li>
                    <li><b>jeśli to operacja na Twojej karcie, zastrzeż kartę jak najszybciej</b><br/>
                        Zastrzeż kartę, gdy widzisz nieznane Ci operacje, obawiasz się, że ktoś mógł z niej skorzystać (np. ktoś Ci ją ukradł) lub podejrzewasz, że ktoś zdobył dane Twojej karty oraz  gdy ktoś znalazł Twoją kartę i Ci ją oddał - w takiej sytuacji również rozważ zastrzeżenie karty, ponieważ taka osoba zna dane Twojej karty i może je wykorzystać bez Twojej wiedzy. Zastrzeżenie karty jest nieodwracalne – nikt już z niej nie skorzysta.</li>
                </ul>
            </div>
            <div>
                <h3>Wyłudzenie danych na fałszywej stronie</h3>
                <p>Co mam zrobić, jeśli na fałszywej stronie banku podam swoje dane (np. numer klienta, hasło, dane osobowe lub dane karty płatniczej)?</p>
                <ul>
                    <li><b>nie akceptuj transakcji, których nie rozpoznajesz</b><br/>
                        Ostrożnie czytaj wszystkie powiadomienia autoryzacyjne i SMS-y z banku. Oszuści mogą próbować zlecać operacje w Twoim imieniu.
                      </li>
                    <li><b>zmień hasło logowania</b><br/>
                        Zmień hasło, którym logujesz się na swoje konto w mBanku przez internet oraz w aplikacji mobilnej (a także do innych kont bankowych, poczty e-mail, sklepów internetowych, portali społecznościowych i innych serwisów internetowych gdzie się logujesz). Zmianę wykonaj na urządzeniu, do którego masz pewność, że jest bezpieczne (po przeskanowaniu programem antywirusowym, sformatowaniu dysku twardego, przywróceniu ustawień fabrycznych). W ten sposób uniemożliwisz przestępcom przejęcie dostępu do Twoich kont i danych.
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default StartSecure
