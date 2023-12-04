import React from 'react';
import '../styles/PagesCSS.css';

function EurBalance() {
    let balance = 69.42;
    let accountNumber = '3124150000843646841238';

    // account number formatting
    const formattedAccountNumber = formatAccountNumber(accountNumber);

    function formatAccountNumber(accountNumber) {
        const chunks = [];
        for (let i = 0; i < accountNumber.length; i += 4) {
            chunks.push(accountNumber.substring(i, i + 4));
        }
        return chunks.join(' ');
    }

    return (
        <div className="eurBalance">
            <div className="balanceText">
                <div>
                    <p className="textDecoration">Sadlo EUR</p>
                    <p className="textDecoration, fontSize">USD ${balance}</p>
                </div>
                <br/>
                <div>
                    <p className="textDecoration">Nr. rachunku:</p>
                    <p className="textDecoration">{formattedAccountNumber}</p>
                </div>
            </div>
        </div>
    );
}

export default EurBalance;
