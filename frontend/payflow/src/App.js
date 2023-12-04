import Navbar from "./components/elements/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import './components/styles/App.css'

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
