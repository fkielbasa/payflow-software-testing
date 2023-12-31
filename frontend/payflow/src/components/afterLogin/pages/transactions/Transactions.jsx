import React from 'react';
import styles from './Transactions.module.css';
import TransactionsContainer from "../../elements/transactions/TransactionsContainer";

function Transactions() {
    return (
        <div className={styles.transactionsContainer}>
            <TransactionsContainer screenName={'transactions'}/>
        </div>
    );
}

export default Transactions;

