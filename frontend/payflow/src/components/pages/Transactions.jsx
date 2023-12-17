import React from 'react';
import '../styles/TransactionsStyles.css';
import WholeTransactions from "../elements/WholeTransactions";

function Transactions() {
    return (
        <div className="transactionsContainer">
            <WholeTransactions/>
        </div>
    );
}

export default Transactions;

