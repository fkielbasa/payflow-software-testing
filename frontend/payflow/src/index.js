import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Transactions from "./components/pages/Transactions";
import NotFound from "./components/pages/notFound";
import Transfers from "./components/pages/Transfers";
import Credits from "./components/pages/Credits";
import Cards from "./components/pages/Cards";
import Settings from "./components/pages/Settings";
import LogOut from "./components/pages/LogOut";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="home" element={<Home/>} />
                    <Route path="transactions" element={<Transactions/>} />
                    <Route path="transfers" element={<Transfers/>} />
                    <Route path="credits" element={<Credits/>} />
                    <Route path="cards" element={<Cards/>} />
                    <Route path="settings" element={<Settings/>} />
                    <Route path="logOut" element={<LogOut/>} />
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
