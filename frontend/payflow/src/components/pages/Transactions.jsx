import React from 'react';
import styles from '../styles/transactions/Transactions.module.css';
import TransactionsContainer from "../elements/TransactionsContainer";

function Transactions() {
    return (
        <div className={styles.transactionsContainer}>
            <TransactionsContainer screenName={'transactions'}/>
        </div>
    );
}

export default Transactions;

