
import StartNavBar from './startNavbar.module.css'
import logo from '../../../../assets/beforeLogin/payflow.png'
import { CiLogin } from "react-icons/ci";
import {Link} from "react-router-dom";

const StartNavbar = () => {

    return(
        <div className={StartNavBar.container}>
            <div className={StartNavBar.wrapper}>
                <div>
                    <Link to="/"><img src={logo} className={StartNavBar.logo}/></Link>
                </div>
                <ul className={StartNavBar.ul}>
                    <li><Link className={StartNavBar.link} to="accounts">konta</Link></li>
                    <li><Link className={StartNavBar.link} to="loans">kredyty</Link></li>
                    <li><Link className={StartNavBar.link} to="bankCards">karty</Link></li>
                    <li><Link className={StartNavBar.link} to="services">usługi</Link></li>
                    <li><Link className={StartNavBar.link} to="secure">bezpieczeństwo</Link></li>
                </ul>
            </div>
            <div className={StartNavBar.signWrapper}>
                <div className={StartNavBar.log}>
                    <Link to="login">
                        <CiLogin />
                        <p>Zaloguj się</p>
                    </Link>
                </div>
                <div className={StartNavBar.newAcc}><Link to="register">Otwórz konto</Link></div>
            </div>
        </div>
    )
}

export default StartNavbar
