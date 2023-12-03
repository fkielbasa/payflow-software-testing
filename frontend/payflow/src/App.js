import Navbar from "./components/elements/Navbar";
import React from "react";
import Logo from "./components/elements/Logo";
import {Link, useLocation} from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === "/homePage";
    const isTransactionsPage = location.pathname === "/transactions";

    return (
        <div className="container-fluid">
            {(isHomePage || isTransactionsPage) && <Navbar />}
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
