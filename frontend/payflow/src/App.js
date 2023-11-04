import Navbar from "./components/navbar/Navbar";
import React from "react";
import Logo from "./components/logo/Logo";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="HomePage">
                <Link to="/homePage">
                    <Logo />
                </Link>
            </div>
        </div>
    );
}

export default App;
