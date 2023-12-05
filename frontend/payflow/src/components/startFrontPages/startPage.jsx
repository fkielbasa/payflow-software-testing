import StartNavbar from "./startNavbar";
import {Outlet} from "react-router-dom";
import StartPageCss from './startPage.module.css'
import StartFooter from "./startFooter";

const StartPage = () => {

    return(
        <div className={StartPageCss.containerFluid}>
            <StartNavbar />
            <div className={StartPageCss.container}>
                <Outlet />
            </div>
            <StartFooter />
        </div>
    )
}

export default StartPage
