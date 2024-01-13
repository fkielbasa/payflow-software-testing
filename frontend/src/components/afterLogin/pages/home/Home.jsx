import React from 'react';
import styles from './Home.module.css';

import {Link} from "react-router-dom";
import TransactionsContainer from "../../elements/transactions/TransactionsContainer";
import { useSpring, animated } from 'react-spring';

function Home() {
    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });
    return (
        <animated.div style={fadeInAnimation}>

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
                        {/*<TransactionsContainer maxPerPage={4} screenName={'home'}/>*/}
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default Home;
