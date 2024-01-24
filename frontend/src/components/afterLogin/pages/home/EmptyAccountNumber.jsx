import React from 'react';
import styles from './EmptyAccountNumber.module.css';

const EmptyAccountNumber = ({onClick }) => {

    return (
        <div className={styles.position} onClick={onClick}>
            <p>+</p>
        </div>
    );
}

export default EmptyAccountNumber;
