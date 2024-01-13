
import StartAccountsCss from './startAccounts.module.css'
import { CiWallet, CiGlobe, CiCreditCard1 } from "react-icons/ci";
import InfoCard from "../info/infoCard";
const StartAccounts = () => {
    return (
        <div>
            <div>
                <h3>Jak założyć konto w banku przez Internet?</h3>
                <p>
                    <b>Nie musisz już odwiedzać banku,</b> żeby założyć konto osobiste.
                    Wystarczy wolna chwila i dostęp do internetu.
                    W PayFlow rachunek otworzysz za pomocą naszej strony internetowej.
                    Wniosek złożysz w parę minut, a konto aktywujemy
                    jak najszybciej jak będzie to możliwe.
                </p>
                <p>
                    Jeśli chcesz korzystać z naszych usług, wystarczy że założysz konto a wszystkie nasze usługi będą dla ciebei dostępne od ręki.
                </p>
            </div>
            <div>
                <p className={StartAccountsCss.text}>Sprawdź nasze korzyści!</p>
                <div className={StartAccountsCss.cards}>
                    <InfoCard title={"Konto dla młodych"} icon={<CiCreditCard1 />} description={"Konto od 13 do 24 lat z kartą, która wygląda tak, jak chcesz"} />
                    <InfoCard title={"Konto osobiste w promocji"} icon={<CiWallet />} description={"0zł za konto, kartę i aplikację"} />
                    <InfoCard title={"Konto premium"} icon={<CiGlobe />} description={"Konto premium z dostępem do pakietu narzędzi Intensive i premią"} />
                </div>
            </div>
        </div>
    )
}
export default StartAccounts
