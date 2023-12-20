import Navbar from "./components/elements/Navbar";
import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import styles from './components/styles/app/App.module.css'
import TopNavbar from "./components/elements/TopNavbar";

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
