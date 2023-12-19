import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";


import StartPage from "./components/startFrontPages/startPage";
import DefaultPage from "./components/startFrontPages/defaultPage";
import StartAccounts from "./components/startFrontPages/startAccounts";
import StartCredits from "./components/startFrontPages/startCredits";
import StartCards from "./components/startFrontPages/startCards";
import StartSecure from "./components/startFrontPages/startSecure";
import StartServices from "./components/startFrontPages/startServices";
import Login from "./components/login/login";
import Register from "./components/login/register";


import Home from "./components/pages/Home";
import Transactions from "./components/pages/Transactions";
import Transfers from "./components/pages/Transfers";
import Credits from "./components/pages/Credits";
import Settings from "./components/pages/Settings";
import LogOut from "./components/pages/LogOut";
import NotFound from "./components/pages/NotFound";
import Cards from "./components/pages/Cards";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>


                <Route path="/" element={<StartPage />}>
                    <Route path="/" element={<DefaultPage />} />
                    <Route path="/accounts" element={<StartAccounts />} />
                    <Route path="/loans" element={<StartCredits />} />
                    <Route path="/bankCards" element={<StartCards />} />
                    <Route path="/services" element={<StartServices />} />
                    <Route path="/secure" element={<StartSecure />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                    {/*<Route path="*" element={<NotFound/>}/>*/}

                {/*<Route path="/home" element={<App/>}>*/}
                <Route path="/" element={<App/>}>
                    <Route path="/home" element={<Home/>} />
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
