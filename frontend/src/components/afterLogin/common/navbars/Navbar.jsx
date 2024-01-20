import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import styles from './Navbar.module.css';
import { useSpring, animated } from 'react-spring';

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

import exchange from '../../../../assets/navbar/cantor/exchange.png'
import exchangeFilled from '../../../../assets/navbar/cantor/exchangeFilled.png'

function Navbar() {
    const location = useLocation();

    const isHome = location.pathname === '/home';
    const isTransactions = location.pathname === '/transactions';

    const isCredits = location.pathname === '/credits';
    const isCards = location.pathname === '/cards';
    const isTransfers = location.pathname === '/transfers';
    const isCantor = location.pathname === '/cantor';

    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });


    return (
        <animated.div style={fadeInAnimation}>

            <div className={styles.verticalNavbar}>
                <div className={styles.navbarFixed}>
                    <div className={styles.firstSection}>
                        <nav className={styles.nav}>
                            <ul className={styles.ulList}>
                                <li className={isHome ? [styles.liList, styles.selected].join(' ') : styles.liList}>
                                    <Link to='/home' className={`${styles.aLink} ${isHome ? 'active' : ''}`}>
                                        <img className={styles.navImages} src={isHome ? houseFill : house} alt="Home"/>
                                        <p>Strona główna</p>
                                    </Link>
                                </li>
                                <li className={isTransactions ? [styles.liList, styles.selected].join(' ') : styles.liList}>
                                    <Link to='/transactions'
                                          className={`${styles.aLink} ${isTransactions ? 'active' : ''}`}>
                                        <img className={styles.navImages}
                                             src={isTransactions ? transactionsFill : transactions}
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
                                        <img className={styles.navImages} src={isCredits ? creditsFill : credits}
                                             alt="credits"/>
                                        Kredyty
                                    </Link>
                                </li>
                                <li className={isCards ? [styles.liList, styles.selected].join(' ') : styles.liList}>
                                    <Link to="/cards" className={`${styles.aLink} ${isCards ? 'active' : ''}`}>
                                        <img className={styles.navImages} src={isCards ? cardsFill : cards}
                                             alt="cards"/>
                                        Karty
                                    </Link>
                                </li>
                                <li className={isCantor ? [styles.liList, styles.selected].join(' ') : styles.liList}>
                                    <Link to="/cantor" className={`${styles.aLink} ${isCantor ? 'active' : ''}`}>
                                        <img className={styles.navImages} src={isCantor ? exchangeFilled : exchange}
                                             alt="cantor"/>
                                        Kantor
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </animated.div>
    );
}

export default Navbar;
