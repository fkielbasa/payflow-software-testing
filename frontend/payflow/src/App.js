import Navbar from "./components/navbar/Navbar";
import HomePage from './components/homepage/HomePage';
import Transactions from './components/transactions/Transactions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from "./components/logo/Logo";
import React from "react";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="HomePage">
                    <a href="http://localhost:3000/"><Logo /></a>
                </div>
                <Routes>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/transactions" component={Transactions}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
