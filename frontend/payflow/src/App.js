import Navbar from "./components/elements/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import './components/styles/AppStyles.css'
import TopNavbar from "./components/elements/TopNavbar";

function App() {
    return (
        <div className="container-fluid">
            <Navbar />

            <div className="container">
                <div className="app-top">
                    <TopNavbar/>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
