import React, {useEffect, useState} from 'react';
import styles from './Home.module.css';

import {Link} from "react-router-dom";
import TransactionsContainer from "../../common/transactions/TransactionsContainer";
import { useSpring, animated } from 'react-spring';
import axios from "axios";
import {config, user} from "../../../../config/authConfig";
import AccountNumber from "./AccountNumber";

function Home() {
    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });
    const [apiData, setApiData] = useState([]);


    useEffect(() => {
        console.log('user.userId', user.userId)
        const getData = async () => {
            axios.get(`http://localhost:8080/api/v1/users/${user.userId}/numbers`, config)
                .then((response) => {
                    console.log('response.data', response.data);
                    setApiData(response.data);
                })
                .catch(err => {
                    console.error(err);
                })
        };

        getData();
    }, [user.userId]);

    return (
        <animated.div style={fadeInAnimation}>
            <div className={styles.homePage}>
                <div className={styles.contentWrapper}>
                    <div className={styles.leftSidePosition}>
                        {apiData.map((numbers, index) => (
                            <div key={index}>
                                <AccountNumber
                                    accountNumberType={numbers.accountNumberType}
                                    balance={numbers.balance}
                                    currency={numbers.currency}
                                    number={numbers.number}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.transactionPosition}>
                        <div className={styles.sameHeight}>
                            <p className={styles.marginL}>Ostatnie transakcje</p>
                            <Link
                                to="/transactions" className={styles.linkTo}>
                                Pokaż więcej
                            </Link>
                        </div>
                        <TransactionsContainer maxPerPage={4}/>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default Home;
