import React from 'react';
import styles from './Transactions.module.css';
import TransactionsContainer from "../../common/transactions/TransactionsContainer";

function Transactions() {
    return (
        <div className={styles.transactionsContainer}>
            {/*<TransactionsContainer screenName={'transactions'}/>*/}
            <TransactionsContainer screenName={'transactions'}/>
        </div>
    );
}

export default Transactions;

