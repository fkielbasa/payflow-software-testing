import React, {useEffect, useState} from 'react';
import styles from "./Credits.module.css";
import { useSpring, animated } from 'react-spring';
import NewCredit from "./newCredit";

function Credits() {
    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });
    const handleSubmit = () => {
        console.log('Przelew wysłany');
        alert('Przelew wysłany');
    };




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
            </div>
        </animated.div>
    );
}

export default Credits;
