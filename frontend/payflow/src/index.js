import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";


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
import Settings from "./components/afterLogin/pages/Settings";
import LogOut from "./components/afterLogin/pages/LogOut";
import NotFound from "./components/afterLogin/pages/notFound/NotFound";
import Cards from "./components/afterLogin/pages/cards/Cards";
import CardDetails from "./components/afterLogin/pages/cards/CardDetails";


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
                    <Route path="cards/:id" element={<CardDetails/>} />
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
