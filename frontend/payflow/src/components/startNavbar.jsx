
import StartNavBar from './startNavbar.module.css'
import logo from '../assets/payflow.png'
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
                    <li><Link className={StartNavBar.link} to="credits">kredyty</Link></li>
                    <li><Link className={StartNavBar.link} to="accounts">karty</Link></li>
                    <li><Link className={StartNavBar.link} to="accounts">inwestycje i oszczędności</Link></li>
                    <li><Link className={StartNavBar.link} to="accounts">usługi</Link></li>
                    <li><Link className={StartNavBar.link} to="accounts">bezpieczeństwo</Link></li>
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
