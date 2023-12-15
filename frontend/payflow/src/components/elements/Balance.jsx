import React from 'react';
import '../styles/HomeStyles.css';
import '../styles/BalanceStyles.css';
import ChartComponent from "./ChartComponent";

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
                    <p className="textDecoration fontSize">{accountNumberConst}</p>
                </div>
                <div>
                    <p className="accountDetails">Szczegóły konta >></p>
                </div>
            </div>
            <div className="chartPosition">
                    <ChartComponent type={props.currency}/>
            </div>
        </div>
    );
}

export default Balance;
