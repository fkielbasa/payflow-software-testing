import Navbar from "./components/elements/Navbar";
import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import './components/styles/AppStyles.css'
import TopNavbar from "./components/elements/TopNavbar";

function App() {
    const location = useLocation();

    const paths = ['/home', '/transactions', '/transfers', '/credits', '/cards', '/settings', '/logOut'];
    return (
        // do not change anything here
        <div className="container-fluid">
            {paths.includes(location.pathname) && <Navbar />}
            <div className="container">
                <div className="app-top">
                    {paths.includes(location.pathname) && <TopNavbar />}
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
