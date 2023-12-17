import React from 'react';
import '../styles/transactions/TransactionsStyles.css';
import TransactionsContainer from "../elements/TransactionsContainer";

function Transactions() {
    return (
        <div className="transactionsContainer">
            <TransactionsContainer screenName={'transactions'}/>
        </div>
    );
}

export default Transactions;

