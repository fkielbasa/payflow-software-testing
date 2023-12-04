import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../styles/Navbar.css';

import house from "../../assets/houses.svg";
import houseFill from "../../assets/houses-fill.svg";
import transactions from "../../assets/money-bill-transfer.svg";
import transfers from "../../assets/arrow-right-arrow-left.svg";
import credits from "../../assets/money-bill-fill.svg";
import cards from "../../assets/credit-card.svg";

import settings from "../../assets/gear.svg";
import logOut from "../../assets/door-open.svg";

import Logo from "./Logo";

function Navbar() {
    const location = useLocation();

    const isHomePage = location.pathname === '/home';
    const isTransactionsPage = location.pathname === '/transactions';

    return (
        <div className="verticalNavbar">

            <div className="firstSection">
                <div className="container">
                    <Link to="/homePage">
                        <Logo/>
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to='/home'>
                                <img className="navImages" src={isHomePage ? houseFill : house} alt="Home"/>
                                Strona główna
                            </Link>
                        </li>
                        <li>
                            <Link to='/transactions'>
                                <img className="navImages" src={transactions} alt="transactions"/>
                                Transakcje
                            </Link>
                        </li>
                        <li>
                            <a href="/transfers">
                                <img className="navImages" src={transfers} alt="transfers"/>
                                Przelewy
                            </a>
                        </li>
                        <li>
                            <a href="/credits">
                                <img className="navImages" src={credits} alt="credits"/>
                                Kredyty
                            </a>
                        </li>
                        <li>
                            <a href="/cards">
                                <img className="navImages" src={cards} alt="cards"/>
                                Karty
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/settings'>
                            <img className="navImages" src={settings} alt="settings"/>
                            Ustawienia
                        </Link>
                    </li>
                    <li>
                        <Link to='/logOut'>
                            <img className="navImages" src={logOut} alt="logOut"/>
                            Wyloguj
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
