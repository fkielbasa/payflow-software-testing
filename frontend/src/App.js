import Navbar from "./components/afterLogin/common/navbars/Navbar";
import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import styles from './App.module.css'
import TopNavbar from "./components/afterLogin/common/navbars/TopNavbar";

function App() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.containerFluid}>
                <TopNavbar />
                    <div className={styles.appTop}>
                        <Navbar />
                        <Outlet/>
                    </div>
            </div>
        </div>
    );
}

export default App;
