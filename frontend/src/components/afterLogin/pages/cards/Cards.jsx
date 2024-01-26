import React, { useEffect, useState } from 'react';
import styles from './Cards.module.css';
import CreditCard from "./CreditCard";
import { useSpring, animated } from 'react-spring';
import axios from "axios";
import { BASE_URL } from "../../../../config/shared";
import { config, user } from "../../../../config/authConfig";
import CardsChart from "./CardsChart";

function Cards() {
    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });

    const [apiCardData, setApiCardData] = useState([]);
    const [clickedCardIndex, setClickedCardIndex] = useState(null);
    const [apiDataChartTransactions, setApiDataChartTransactions] = useState([]);
    const [apiDataAllTransactions, setApiDataAllTransactions] = useState([]);
    // const [selectedAccountId, setSelectedAccountId] = useState(null);
    // const [currency, setCurrency] = useState('PLN'); // Dodaj stan dla waluty

    useEffect(() => {
        getCardData();
        // getDataAllTransactions();
    }, [user.userId]);


    const getCardData = async () => {
        axios
            .get(`${BASE_URL}/api/v1/users/${user.userId}/cards`, config)
            .then((response) => {
                console.log('getCardData response', response.data);
                setApiCardData(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const getDataChartTransactions = async (id) => {
        axios.get(`${BASE_URL}/api/v1/account-numbers/${id}/transfers`, config)
            .then((response) => {
                console.log('getDataAllTransactions response', response.data);
                setApiDataChartTransactions(response.data);
            })
            .catch(err => {
                console.error(err);
            })
    };

    // const getDataAllTransactions = async () => {
    //     axios.get(`${BASE_URL}/api/v1/account-numbers/${user.userId}/transfers`, config)
    //         .then((response) => {
    //             console.log('getDataAllTransactions response', response.data);
    //             setApiDataAllTransactions(response.data);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    // };

    const handleClick = (index, card) => {
        console.log('karta wybrana')
        console.log('Card ID:', card.id);
        getDataChartTransactions(card.idAccountNumber);

        // setSelectedAccountId(card.idAccountNumber);

        setClickedCardIndex(index);
    }

    // Sprawdzenie, czy apiCardData jest tablicą
    if (!Array.isArray(apiCardData)) {
        console.error('apiCardData is not an array:', apiCardData);
        return null; // lub obsłuż błąd odpowiednio
    }

    return (
        <animated.div style={fadeInAnimation}>
            <div className={styles.cardsPage}>
                {apiCardData.map((card, index) => {
                    return (
                        <div
                            key={index}
                            className={`${styles.cardOnCard} ${clickedCardIndex === index ? styles.active : ''}`}
                            onClick={() => handleClick(index, card)}
                        >
                            <CreditCard
                                currency={card.currency}
                                balance={card.balance}
                                cardNumber={card.cardNumber}
                                owner={card.owner}
                                cvv={card.cvv}
                                expiration={card.validDate}
                                active={card.active}
                                blocked={card.blocked}
                                details={false}
                                id={card.id}
                                size={"small"}
                                to={`/cards/$`}
                                isClicked={clickedCardIndex === index}
                            />
                        </div>
                    );
                })}
                <div className={styles.leftSitePosition}>
                    {/*<CardsChart currency={currency} transactions={selectedAccountId ? apiDataChartTransactions : apiDataChartTransactions}/>*/}
                    <CardsChart transactions={apiDataChartTransactions}/>
                </div>
            </div>

        </animated.div>
    );
}

export default Cards;
