import React from "react";
import { Link } from "react-router-dom";
import styles from './NotFound.module.css';
import { useSpring, animated } from 'react-spring';


const NotFound = () => {
    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
    });
    return (
        <animated.div style={fadeInAnimation}>

            <div className={styles.notFound}>
                <h1>404 - Not found!</h1>
                <p>Strona na której się znajdujesz nie istnieje!</p>
                <hr className={styles.hrLine}/>
                <p>Przejdź do strony głównej.</p>
                <Link className={styles.notFoundBtn} to="/home" role="button">Home</Link>
            </div>
        </animated.div>
    );
};

export default NotFound;
