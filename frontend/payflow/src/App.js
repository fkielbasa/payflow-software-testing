import Navbar from "./components/afterLogin/elements/navbars/Navbar";
import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import styles from './App.module.css'
import TopNavbar from "./components/afterLogin/elements/navbars/TopNavbar";

function App() {
    const location = useLocation();

    const paths = ['/home', '/transactions', '/transfers', '/credits', '/cards', '/settings', '/logOut'];
    return (
        // do not change anything here
        <div className={styles.containerFluid}>
            {paths.includes(location.pathname) && <Navbar />}
            <div>
                <div className={styles.appTop}>
                    {paths.includes(location.pathname) && <TopNavbar />}
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
