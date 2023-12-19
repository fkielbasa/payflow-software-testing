import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/navbars/Navbar.module.css';

import house from "../../assets/navbar/home/houses.svg";
import houseFill from "../../assets/navbar/home/houses-fill.svg";

import transactions from "../../assets/navbar/transactions/briefcase.svg";
import transactionsFill from "../../assets/navbar/transactions/briefcase-fill.svg";

import transfers from "../../assets/navbar/transfers/arrow-right.svg";
import transfersFill from "../../assets/navbar/transfers/arrow-right-arrow-left.svg";

import credits from "../../assets/navbar/credits/money-bill.svg";
import creditsFill from "../../assets/navbar/credits/money-bill-fill.svg";

import cards from "../../assets/navbar/cards/credit-card.svg";
import cardsFill from "../../assets/navbar/cards/credit-card-fill.svg";

import settings from "../../assets/navbar/settings/gear.svg";
import settingsFill from "../../assets/navbar/settings/gear-fill.svg";

import logOut from "../../assets/navbar/logOut/door-open.svg";
import logOutFill from "../../assets/navbar/logOut/door-open-fill.svg";

import Logo from "./Logo";

function Navbar() {
    const location = useLocation();

    const isHome = location.pathname === '/home';
    const isTransactions = location.pathname === '/transactions';

    const isCredits = location.pathname === '/credits';
    const isCards = location.pathname === '/cards';
    const isTransfers = location.pathname === '/transfers';
    const isSettings = location.pathname === '/settings';
    const isLogOut = location.pathname === '/logOut';

    return (
        <div className={styles.verticalNavbar}>
            <div className={styles.navbarFixed}>
                <div className={styles.firstSection}>
                    <div>
                        <Link to="/home">
                            <Logo/>
                        </Link>
                    </div>

                    <nav>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                <Link to='/home' className={`${styles.a} ${isHome ? 'active' : ''}`}>
                                    <img className={styles.navImages} src={isHome ? houseFill : house} alt="Home"/>
                                    Strona główna
                                </Link>
                            </li>
                            <li className={styles.li}>
                                <Link to='/transactions' className={`${styles.a} ${isTransactions ? 'active' : ''}`}>
                                    <img className={styles.navImages} src={isTransactions ? transactionsFill : transactions}
                                         alt="transactions"/>
                                    Transakcje
                                </Link>
                            </li>
                            <li className={styles.li}>
                                <Link to='/transfers' className={`${styles.a} ${isTransfers ? 'active' : ''}`}>
                                    <img className={styles.navImages} src={isTransfers ? transfersFill : transfers}
                                         alt="transfers"/>
                                    Przelewy
                                </Link>
                            </li>
                            <li className={styles.li}>
                                <Link to="/credits" className={`${styles.a} ${isCredits ? 'active' : ''}`}>
                                    <img className={styles.navImages} src={isCredits ? creditsFill : credits} alt="credits"/>
                                    Kredyty
                                </Link>
                            </li>
                            <li className={styles.li}>
                                <Link to="/cards" className={`${styles.a} ${isCards ? 'active' : ''}`}>
                                    <img className={styles.navImages} src={isCards ? cardsFill : cards} alt="cards"/>
                                    Karty
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link to='/settings' className={`${styles.a} ${isSettings ? 'active' : ''}`}>
                                <img className={styles.navImages} src={isSettings ? settingsFill : settings} alt="settings"/>
                                Ustawienia
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link to='/logOut' className={`${styles.a} ${isLogOut ? 'active' : ''}`}>
                                <img className={styles.navImages} src={isLogOut ? logOutFill : logOut} alt="logOut"/>
                                Wyloguj
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
