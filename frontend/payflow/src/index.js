import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import StartPage from "./components/startPage";
import DefaultPage from "./components/defaultPage";
import StartAccounts from "./components/startAccounts";
import StartCredits from "./components/startCredits";
import StartCards from "./components/startCards";
import StartSecure from "./components/startSecure";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<App />} />*/}
                <Route path="/" element={<StartPage />}>
                    <Route path="/" element={<DefaultPage />} />
                    <Route path="/accounts" element={<StartAccounts />} />
                    <Route path="/credits" element={<StartCredits />} />
                    <Route path="/cards" element={<StartCards />} />
                    <Route path="/secure" element={<StartSecure />} />
                </Route>

                    {/*<Route path="*" element={<NotFound/>}/>*/}

            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
