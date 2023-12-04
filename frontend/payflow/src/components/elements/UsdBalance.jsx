import React from 'react';
import '../styles/PagesCSS.css';

function UsdBalance() {
    let balance = 27.37;
    let accountNumber = '3423870000441246075444';

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
        <div className="usdBalance">
            <div className="balanceText">
                <div>
                    <p className="textDecoration">Saldo USD</p>
                    <p className="textDecoration, fontSize">USD ${balance}</p>
                </div>
                <br />
                <div>
                    <p className="textDecoration">Nr. rachunku:</p>
                    <p className="textDecoration">{formattedAccountNumber}</p>
                </div>
            </div>
        </div>
    );
}

export default UsdBalance;
