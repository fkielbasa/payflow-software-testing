import StartCardsCss from './startCards.module.css'
import {CiCreditCard1} from "react-icons/ci";
import InfoCard from "./infoCard";
import Card from "../assets/card.png";

const StartCards = () => {

    return(
        <div className={StartCardsCss.container}>
            <div className={StartCardsCss.horizontal}>
                <div>
                <div >
                    <p>Karty kredytowe podstawowe</p>
                    <div className={StartCardsCss.wrapperCards}>
                        <InfoCard title={"Konto dla młodych"} icon={<CiCreditCard1 />} description={"Konto od 13 do 24 lat z kartą, która wygląda tak, jak chcesz"} />

                    </div>
                </div>
                <div>
                    <p>Karta kredytowa do mKonta Intensive</p>
                    <div className={StartCardsCss.wrapperCards}>
                        <InfoCard title={"Konto dla młodych"} icon={<CiCreditCard1 />} description={"Konto od 13 do 24 lat z kartą, która wygląda tak, jak chcesz"} />
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
