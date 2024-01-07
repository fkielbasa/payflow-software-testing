import React from 'react';
import styles from './Transactions.module.css';
import TransactionsContainer from "../../elements/transactions/TransactionsContainer";
import NewTransactionsContainer from "../../elements/transactions/NewTransactionsContainer";

function Transactions() {
    return (
        <div className={styles.transactionsContainer}>
            {/*<TransactionsContainer screenName={'transactions'}/>*/}
            <NewTransactionsContainer screenName={'transactions'}/>
        </div>
    );
}

export default Transactions;

