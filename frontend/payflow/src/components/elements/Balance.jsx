import React from 'react';
import '../styles/PagesCSS.css';

function Balance(props) {
    // account number formatting
    const accountNumberConst = formatAccountNumber(props.accountNumber);

    function formatAccountNumber(accountNumber) {
        const accountString = accountNumber.toString();

        const firstTwoDigits = accountString.substring(0, 2);
        const remainingDigits = accountString.substring(2);

        const chunks = [];
        for (let i = 0; i < remainingDigits.length; i += 4) {
            chunks.push(remainingDigits.substring(i, i + 4));
        }

        return `${firstTwoDigits} ${chunks.join(' ')}`;
    }


    return (
        <div className="balance">
            <div className="balanceText">
                <div>
                    <p className="textDecoration">Saldo {props.currency}</p>
                    <p className="textDecoration, fontSize">{props.currency} ${props.balance}</p>
                </div>
                <br />
                <div>
                    <p className="textDecoration">Nr. rachunku:</p>
                    <p className="textDecoration">{accountNumberConst}</p>
                </div>
                <div>
                    <p className="accountDetails">Szczegóły konta >></p>
                </div>
            </div>
        </div>
    );
}

export default Balance;
