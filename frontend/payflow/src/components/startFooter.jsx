import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaInstagram} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import StartFooterCss from './startFooter.module.css'
const StartFooter = () => {


    return (
        <div className={StartFooterCss.container}>
            <div className={StartFooterCss.wrapperInfo}>
                <p>© 2023 PayFlow Bank Akademicki</p>
                <p>IBAN Kod BIC (Swift): ATARPL</p>
            </div>
            <div >
                <div className={StartFooterCss.icons}>
                    <FaFacebook  />
                    <BsTwitterX />
                    <FaGoogle  />
                    <FaInstagram  />
                    <FaLinkedin />
                    <FaGithub  />
                </div>
            </div>
        </div>
    );
}
export default StartFooter
