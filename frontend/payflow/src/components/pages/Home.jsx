import React from 'react';
import styles from '../styles/home/Home.module.css';

import TransactionsContainer from "../elements/TransactionsContainer";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className={styles.homePage}>
            <div className={styles.contentWrapper}>
                <div className={styles.leftSidePosition}>
                    <p>Tutaj będzie coś jeszcze</p>
                </div>
                <div className={styles.transactionPosition}>
                    <div className={styles.sameHeight}>
                        <p className={styles.marginL}>Ostatnie transakcje</p>
                        <Link
                            to="/transactions" className={styles.linkTo}>
                            Pokaż więcej
                        </Link>
                    </div>
                    <TransactionsContainer maxPerPage={4} screenName={'home'}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
