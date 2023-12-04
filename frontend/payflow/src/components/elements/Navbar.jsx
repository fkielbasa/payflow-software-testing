import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../styles/NavbarStyles.css';

import house from "../../assets/home/houses.svg";
import houseFill from "../../assets/home/houses-fill.svg";

import transactions from "../../assets/money-bill-transfer.svg";
import { IoCashOutline } from "react-icons/io5";
import { IoCash } from "react-icons/io5";




import transfers from "../../assets/arrow-right-arrow-left.svg";

import credits from "../../assets/credits/money-bill.svg";
import creditsFill from "../../assets/credits/money-bill-fill.svg";

import cards from "../../assets/cards/credit-card.svg";
import cardsFill from "../../assets/cards/credit-card-fill.svg";

import settings from "../../assets/settings/gear.svg";
import settingsFill from "../../assets/settings/gear-fill.svg";

import logOut from "../../assets/logOut/door-open.svg";
import logOutFill from "../../assets/logOut/door-open-fill.svg";

import Logo from "./Logo";

function Navbar() {
    const location = useLocation();

    const isHome = location.pathname === '/home';
    const isTransactions = location.pathname === '/transactions';


    const isCredits = location.pathname === '/credits';
    const isCards = location.pathname === '/cards';

    const isSettings = location.pathname === '/settings';
    const isLogOut = location.pathname === '/logOut';


    return (
        <div className="verticalNavbar">

            <div className="firstSection">
                <div className="container">
                    <Link to="/home">
                        <Logo/>
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to='/home'>
                                <img className="navImages" src={isHome ? houseFill : house} alt="Home"/>
                                Strona główna
                            </Link>
                        </li>
                        <li>
                            <Link to='/transactions'>
                                {/*<img className="navImages" img={<IoCashOutline />} alt="transactions" />*/}
                                <IoCashOutline />
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
                                <img className="navImages" src={isCredits ? creditsFill : credits} alt="credits"/>
                                Kredyty
                            </a>
                        </li>
                        <li>
                            <a href="/cards">
                                <img className="navImages" src={isCards ? cardsFill : cards} alt="cards"/>
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
                            <img className="navImages" src={isSettings ? settingsFill : settings} alt="settings"/>
                            Ustawienia
                        </Link>
                    </li>
                    <li>
                        <Link to='/logOut'>
                            <img className="navImages" src={isLogOut ? logOutFill : logOut} alt="logOut"/>
                            Wyloguj
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
