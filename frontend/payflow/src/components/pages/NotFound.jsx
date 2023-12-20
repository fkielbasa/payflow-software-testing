import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/notFound/NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1>404 - Not found!</h1>
            <p>Strona na której się znajdujesz nie istnieje!</p>
            <hr className={styles.hr}/>
            <p>Przejdź do strony głównej.</p>
            <Link className={styles.notFoundBtn} to="/home" role="button">Home</Link>
        </div>
    );
};

export default NotFound;
