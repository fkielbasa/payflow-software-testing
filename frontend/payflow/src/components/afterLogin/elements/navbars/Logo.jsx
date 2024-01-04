import React from 'react';
import mainImage from '../../../../assets/navbar/payflow.png';
import styles from './Logo.module.css';

function Logo() {
    return (
        <div className={styles.image} >
            <img src={mainImage} alt="Company logo" />
        </div>
    );
}

export default Logo;
