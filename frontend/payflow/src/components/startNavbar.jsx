
import StartNavBar from './startNavbar.module.css'
import logo from '../assets/payflow.png'
import { CiLogin } from "react-icons/ci";

const StartNavbar = () => {

    return(
        <div className={StartNavBar.container}>
            <div className={StartNavBar.wrapper}>
                <div>
                    <img src={logo} className={StartNavBar.logo}/>
                </div>
                <ul className={StartNavBar.ul}>
                    <li>konta</li>
                    <li>kredyty</li>
                    <li>karty</li>
                    <li>inwestycje i oszczędności</li>
                    <li>usługi</li>
                    <li>bezpieczeństwo</li>
                </ul>
            </div>
            <div className={StartNavBar.signWrapper}>
                <div className={StartNavBar.log}>
                    <CiLogin />
                    <p>Zaloguj się</p>
                </div>
                <div className={StartNavBar.newAcc}><p>Otwórz konto</p></div>
            </div>
        </div>
    )
}

export default StartNavbar
