import React from 'react';
import mainImage from '../../assets/navbar/payflow.png';
import styles from '../styles/navbars/Logo.module.css';

function Logo() {
    return (
        <div>
            <img className={styles.image} src={mainImage} alt="Company logo" />
        </div>
    );
}

export default Logo;
