import Navbar from "./components/afterLogin/common/navbars/Navbar";
import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import styles from './App.module.css'
import TopNavbar from "./components/afterLogin/common/navbars/TopNavbar";

function App() {
    const location = useLocation();

    const paths = ['/home', '/transactions', '/transfers', '/credits', '/cards', '/profile', '/account', '/logOut'];
    return (
        // do not change anything here
        <div className={styles.pageWrapper}>
            <div className={styles.containerFluid}>
                {/*{paths.includes(location.pathname) && <TopNavbar/>}*/}
                <TopNavbar />
                {/*<div>*/}
                    <div className={styles.appTop}>
                        {/*{paths.includes(location.pathname) && <Navbar/>}*/}
                        <Navbar />
                        <Outlet/>
                    </div>

                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;
