import React, {useEffect, useState} from 'react';
import styles from './Cards.module.css';
import CreditCard from "./CreditCard";
import ChartComponent from "./ChartComponent";
import { useSpring, animated } from 'react-spring';
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import {config, user} from "../../../../config/authConfig";


function Cards() {
    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });

    const [apiCardData, setApiCardData] = useState([]);

    useEffect(() => {
        const getCardData = async () => {
            axios
                .get(`${BASE_URL}/api/v1/users/${user.userId}/cards`, config)
                .then((response) => {
                    console.log('getCardData response', response.data)
                    setApiCardData(response.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        getCardData();
    }, [user.userId]);

    return (
        <animated.div style={fadeInAnimation}>

            <div className={styles.cardsPage}>
                <div className={styles.cardsContainer}>
                    {apiCardData.map((card, index) => (
                        <div key={index}>
                            <CreditCard currency={card.currency} balance={card.balance}
                                        cardNumber={card.cardNumber} owner={card.owner}
                                        cvv={card.cvv} expiration={card.validDate}
                                        active={card.active} blocked={card.blocked}
                                        details={true} id={card.id} size={"small"} to={`/cards/$`}/>
                        </div>
                    ))}
                </div>
                {/*<div className={styles.chartContainer}>*/}
                {/*    <div className={styles.chartPosition}>*/}
                {/*        <div className={styles.chartMargin}>*/}
                {/*            <ChartComponent type={'USD'}/>*/}
                {/*        </div>*/}
                {/*        <div className={styles.chartMargin}>*/}
                {/*            <ChartComponent type={'EUR'}/>*/}
                {/*        </div>*/}
                {/*        <div className={styles.chartMargin}>*/}
                {/*            <ChartComponent type={'PLN'}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </animated.div>
    );
}

export default Cards;

