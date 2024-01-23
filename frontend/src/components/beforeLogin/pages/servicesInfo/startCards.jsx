import StartCardsCss from './startCards.module.css'
import {CiCreditCard1} from "react-icons/ci";
import InfoCard from "../info/infoCard";
import Card from "../../../../assets/beforeLogin/card.png";

const StartCards = () => {

    return(
        <div className={StartCardsCss.container}>
            <div className={StartCardsCss.horizontal}>
                <div>
                <div >
                    <p>Karty kredytowe podstawowe</p>
                    <div className={StartCardsCss.wrapperCards}>
                        <InfoCard title={"Podstawowa karta kredytowa"} icon={<CiCreditCard1 />} description={"Najniższe oprocentowanie przez 3 miesiące oraz 0 zł za wydanie karty"} />

                    </div>
                </div>
                <div>
                    <p>Karta kredytowa do mKonta Intensive</p>
                    <div className={StartCardsCss.wrapperCards}>
                        <InfoCard title={"Karta kredytowa Mastercard Intensive"} icon={<CiCreditCard1 />} description={"Program Mastercard Intensive oraz limit do 100 tys. zł"} />
                    </div>
                </div>
                </div>
                <div>
                    <img src={Card} alt=""/>
                </div>
            </div>
            <div>
                <p>Jak działa karta kredytowa?</p>
                <ul>
                    <li>Z kartą kredytową zapłacisz za zakupy i usługi w sklepach stacjonarnych i online – za zakupy do 100 zł zapłacisz zbliżeniowo, bez wpisywania PIN-u</li>
                    <li>Kartę kredytową rozliczamy 1 raz w miesiącu – po skończonym okresie rozliczeniowym, masz 24 dni na spłatę zadłużenia</li>
                    <li>Jeśli spłacisz kartę w terminie, nie zapłacisz odsetek</li>
                    <li>Jeśli spłacisz część zadłużenia (minimalna wymagana kwota spłaty zadłużenia to 4% - min. 50 zł), naliczymy odsetki od wykorzystanego limitu kredytowego</li>
                    <li>Możesz skorzystać z automatycznej spłaty zadłużenia – wtedy pieniądze pobierzemy automatycznie z Twojego konta</li>
                </ul>
            </div>
        </div>
    )
}
export default StartCards
