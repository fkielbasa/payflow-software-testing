import Navbar from "./components/Navbar";
import React from "react";
import Logo from "./components/Logo";
import {Link} from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
