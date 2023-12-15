import React from 'react';
import '../styles/HomeStyles.css';
import '../styles/BalanceStyles.css';
import ChartComponent from "./ChartComponent";
import {Link} from "react-router-dom";
import chip from "../../assets/transations/chip.png";

function CreditCard(props) {
    let symbol;

    if (props.currency === 'USD') {
        symbol = '$';
    } else if (props.currency === 'EUR') {
        symbol = '€';
    }

    let backgroundStyles;

    const backgroundStyles1 = {
        background: 'linear-gradient(55deg, rgba(22,135,167,1) 10%, rgba(39,102,120,1) 90%)'
    };
    const backgroundStyles2 = {
        background: 'linear-gradient(144deg, rgba(4,104,132,1) 10%, rgba(90,190,219,1) 90%)'
    };
    const backgroundStyles3 = {
        background: 'linear-gradient(326deg, rgba(39,102,120,1) 5%, rgba(0,198,255,1) 95%)'
    };

    if (props.cardStyle === 1) {
        backgroundStyles = backgroundStyles1;
    } else if (props.cardStyle === 2) {
        backgroundStyles = backgroundStyles2;
    } else if (props.cardStyle === 3) {
        backgroundStyles = backgroundStyles3;
    }

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
        <div style={backgroundStyles} className="balance">
            <div className="balanceText">
                <div className="directionText">
                    <div className="textLeft">
                        <p className="textDecoration fontSize">{props.currency}</p>
                        <p className="textDecoration">Karta bankomatowa</p>
                    </div>
                    <div className="textRight">
                        <p className="textDecoration fontSize paddingRight">{symbol}{props.balance}</p>
                    </div>
                </div>
                <div className="chipPlace">
                    <img src={chip} alt="chip"/>
                </div>
                <div className="">
                    <p className="textDecoration fontSize">{accountNumberConst}</p>
                    <div className="directionText">
                        <div className="textLeft">
                            <p className="textDecoration">Johnny Johinnson</p>
                        </div>
                        <div className="marginLeft">
                            <p className="textDecoration ">06/24</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link className="accountDetails" to="/cards">Szczegóły konta >></Link>
                </div>
            </div>
            <div className="chartPosition">
                <ChartComponent type={props.currency}/>
            </div>
        </div>
    );
}

export default CreditCard;
