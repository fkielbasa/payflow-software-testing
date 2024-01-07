import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import styles from './Navbar.module.css';

import house from "../../../../assets/navbar/home/houses.svg";
import houseFill from "../../../../assets/navbar/home/houses-fill.svg";

import transactions from "../../../../assets/navbar/transactions/briefcase.svg";
import transactionsFill from "../../../../assets/navbar/transactions/briefcase-fill.svg";

import transfers from "../../../../assets/navbar/transfers/arrow-right.svg";
import transfersFill from "../../../../assets/navbar/transfers/arrow-right-arrow-left.svg";

import credits from "../../../../assets/navbar/credits/money-bill.svg";
import creditsFill from "../../../../assets/navbar/credits/money-bill-fill.svg";

import cards from "../../../../assets/navbar/cards/credit-card.svg";
import cardsFill from "../../../../assets/navbar/cards/credit-card-fill.svg";

import settings from "../../../../assets/navbar/settings/gear.svg";
import settingsFill from "../../../../assets/navbar/settings/gear-fill.svg";

import logOut from "../../../../assets/navbar/logOut/door-open.svg";
import logOutFill from "../../../../assets/navbar/logOut/door-open-fill.svg";

import Logo from "./Logo";

function Navbar() {
    const location = useLocation();
    let navigate = useNavigate()

    const isHome = location.pathname === '/home';
    const isTransactions = location.pathname === '/transactions';

    const isCredits = location.pathname === '/credits';
    const isCards = location.pathname === '/cards';
    const isTransfers = location.pathname === '/transfers';
    const isSettings = location.pathname === '/settings';
    const isLogOut = location.pathname === '/logOut';

    const logout = () => {
        localStorage.clear()
        navigate('/home')
        window.location.reload()
    }

    const showSettings = () => {
        alert("Nie ma i nie będzie")
    }

    return (
        <div className={styles.verticalNavbar}>
            <div className={styles.navbarFixed}>
                <div className={styles.firstSection}>
                    {/*<div>*/}
                    {/*    <Link to="/home">*/}
                    {/*        <Logo/>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}

                    <nav className={styles.nav}>
                        <ul className={styles.ulList}>
                            <li className={isHome ? [styles.liList, styles.selected].join(' ') : styles.liList}>
                                <Link to='/home' className={`${styles.aLink} ${isHome ? 'active' : ''}`}>
                                    <img className={styles.navImages} src={isHome ? houseFill : house} alt="Home"/>
                                    <p>Strona główna</p>
                                </Link>
                            </li>
                            <li className={isTransactions ? [styles.liList, styles.selected].join(' ') : styles.liList}>
                                <Link to='/transactions' className={`${styles.aLink} ${isTransactions ? 'active' : ''}`}>
                                    <img className={styles.navImages} src={isTransactions ? transactionsFill : transactions}
                                         alt="transactions"/>
                                    Transakcje
                                </Link>
                            </li>
                            <li className={isTransfers ? [styles.liList, styles.selected].join(' ') : styles.liList}>
                                <Link to='/transfers' className={`${styles.aLink} ${isTransfers ? 'active' : ''}`}>
                                    <img className={styles.navImages} src={isTransfers ? transfersFill : transfers}
                                         alt="transfers"/>
                                    Przelewy
                                </Link>
                            </li>
                            <li className={isCredits ? [styles.liList, styles.selected].join(' ') : styles.liList}>
                                <Link to="/credits" className={`${styles.aLink} ${isCredits ? 'active' : ''}`}>
                                    <img className={styles.navImages} src={isCredits ? creditsFill : credits} alt="credits"/>
                                    Kredyty
                                </Link>
                            </li>
                            <li className={isCards ? [styles.liList, styles.selected].join(' ') : styles.liList}>
                                <Link to="/cards" className={`${styles.aLink} ${isCards ? 'active' : ''}`}>
                                    <img className={styles.navImages} src={isCards ? cardsFill : cards} alt="cards"/>
                                    Karty
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav>
                    <ul className={styles.ulList}>
                        <li className={styles.liList}>
                            <Link

                                className={`${styles.aLink} ${isSettings ? 'active' : ''}`}
                                onClick={showSettings}
                            >
                                <img className={styles.navImages} src={isSettings ? settingsFill : settings} alt="settings"/>
                                Ustawienia
                            </Link>
                        </li>
                        <li className={styles.liList}>
                            <Link

                                className={`${styles.aLink} ${isLogOut ? 'active' : ''}`}
                                onClick={logout}
                            >
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
