import React, {useEffect, useState} from 'react';
import styles from "./Credits.module.css";
import { useSpring, animated } from 'react-spring';
import NewCredit from "./newCredit";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import {config, user} from "../../../../config/authConfig";
import ItemCreditCard from "./itemCreditCard";

function Credits() {
    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });

    const [data,setData] = useState([])

    const handleSubmit = () => {
        console.log('Przelew wysłany');
        alert('Przelew wysłany');
    };



    useEffect(() => {
        const getAllCredits = () => {
            axios
                .get(
                    `${BASE_URL}/api/v1/users/${user.userId}/numbers/loans`,
                    config
                )
                .then((res)=> {
                    setData(res.data)
                    console.log(res.data)
                })
                .catch((err)=> {

                })
        }
        getAllCredits()
    }, []);


    return (
        <animated.div
            style={fadeInAnimation}
            className={styles.creditsContainer}
        >
            <NewCredit />
            <div>
                <header className={styles.headerWrapper}>
                    <h3>Kredyty</h3>
                    <span></span>
                </header>
                <div className={styles.creditsWrapper}>
                    {data.map((credit) => (
                        <ItemCreditCard
                            credit={credit}
                            key={credit.id}
                        />
                    ))}
                </div>
            </div>
        </animated.div>
    );
}

export default Credits;
