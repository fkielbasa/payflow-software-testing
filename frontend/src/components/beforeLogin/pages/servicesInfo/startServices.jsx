import styles from './startServices.module.css'
import PaymentPic from '../../../../assets/payment.jpg'
import PaymentWeb from '../../../../assets/web_payment.jpg'
import ServiceCard from "../service/serviceCard";
import {CiCreditCard1} from "react-icons/ci";
import { MdCurrencyExchange, MdOutlineSecurity } from "react-icons/md";
import InfoCard from "../info/infoCard";

const StartServices = () => {

    return(
        <div>
            <div className={styles.wrapper}>
                <p className={styles.headline}>Przelewy</p>
                <div >
                    <InfoCard title={"Płatności zbliżeniowe"} icon={<CiCreditCard1 />} description={"Zapomnij o gotówce i płać zbliżeniowo"} />
                    <InfoCard title={"Płatności przez internet"} icon={<CiCreditCard1 />} description={"Płać wygodnie przez internet"} />
                </div>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.headline}>Usługi walutowe</p>
                <div >
                    <InfoCard title={"Konto walutowe"} icon={<MdCurrencyExchange />} description={"Płać wygodnie swoją kartą do konta w wielu walutach"} />
                    <InfoCard title={"Kantor"} icon={<MdCurrencyExchange />} description={"Kantor wymiany walut na wyciągnięcie ręki"} />

                </div>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.headline}>Bezpieczeństwo i wygoda</p>
                <div >
                    <InfoCard title={"Dokumenty szyfrowane"} icon={<MdOutlineSecurity />} description={"Dbamy o Twoje bezpieczeństwo w sieci"} />

                </div>
            </div>
        </div>
    )
}
export default StartServices
