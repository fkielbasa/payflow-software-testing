import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";


import StartPage from "./components/beforeLogin/pages/startFrontPage/startPage";
import DefaultPage from "./components/beforeLogin/pages/defaultInfoPages/defaultPage";
import StartAccounts from "./components/beforeLogin/pages/defaultInfoPages/startAccounts";
import StartCredits from "./components/beforeLogin/pages/servicesInfo/startCredits";
import StartCards from "./components/beforeLogin/pages/servicesInfo/startCards";
import StartSecure from "./components/beforeLogin/pages/servicesInfo/startSecure";
import StartServices from "./components/beforeLogin/pages/servicesInfo/startServices";
import Login from "./components/beforeLogin/pages/login/login";
import Register from "./components/beforeLogin/pages/login/register";


import Home from "./components/afterLogin/pages/home/Home";
import Transactions from "./components/afterLogin/pages/transactions/Transactions";
import Transfers from "./components/afterLogin/pages/transfers/Transfers";
import Credits from "./components/afterLogin/pages/credits/Credits";
import Profile from "./components/afterLogin/pages/profil/Profile";
import LogOut from "./components/afterLogin/pages/LogOut";
import NotFound from "./components/afterLogin/pages/notFound/NotFound";
import Cards from "./components/afterLogin/pages/cards/Cards";
import {isExpired} from "react-jwt";
import CardDetails from "./components/afterLogin/pages/cards/CardDetails";
import Account from "./components/afterLogin/pages/account/Account";
import {TOKEN_KEY} from "./config/authConfig";

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
                <Route path="/" element={isExpired(localStorage.getItem(TOKEN_KEY)) ? <Navigate replace to="/login" /> : <App/>}>
                {/*<Route path="/" element={<App/>}>*/}
                    <Route path="/home" element={<Home/>} />
                    <Route path="transactions" element={<Transactions/>} />
                    <Route path="transfers" element={<Transfers/>} />
                    <Route path="credits" element={<Credits/>} />
                    <Route path="cards" element={<Cards/>} />
                    <Route path="cards/:id" element={<CardDetails/>} />
                    <Route path="profile" element={<Profile/>} />
                    <Route path="account" element={<Account/>}/>
                    <Route path="logOut" element={<LogOut/>} />
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
