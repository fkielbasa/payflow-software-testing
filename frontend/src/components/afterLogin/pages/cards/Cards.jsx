import React, { useEffect, useState } from 'react';
import styles from './Cards.module.css';
import CreditCard from "./CreditCard";
import { useSpring, animated } from 'react-spring';
import axios from "axios";
import { BASE_URL } from "../../../../config/shared";
import { config, user } from "../../../../config/authConfig";

function Cards() {
    const fadeInAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    });

    const [apiCardData, setApiCardData] = useState([]);
    const [clickedCardIndex, setClickedCardIndex] = useState(null);

    useEffect(() => {
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

        getCardData();
    }, [user.userId]);

    const handleClick = (index, cardId) => {
        console.log('karta wybrana')
        console.log('Card ID:', cardId);
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
                <div className={styles.cardsContainer}>
                    {apiCardData.map((card, index) => {
                        return (
                            <div
                                key={index}
                                className={`${styles.cardOnCard} ${clickedCardIndex === index ? styles.active : ''}`}
                                onClick={() => handleClick(index, card.id)}
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
                </div>
                <div>
                    {/*chart*/}
                </div>
            </div>
        </animated.div>
    );
}

export default Cards;
