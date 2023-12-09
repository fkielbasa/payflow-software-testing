import React from 'react';
import '../styles/HomeTransictionsStyles.css';
import circleMinus from "../../assets/transations/circleMinus.png";
import circlePlus from "../../assets/transations/circlePlus.png";



function HomeTransictions(props) {
    const balance = props.balance.toFixed(2);;
    const type = props.type;
    const acquired = props.acquired;
    const place = props.place;
    let source;
    let symbol;


    if (type === 'negative'){
        source = circleMinus;
        symbol = '—';
    } else if (type === 'positive') {
        source = circlePlus;
        symbol = '+';
    }

    return (
        <div className="shortPayment">
            <div className="shortPaymentText">
                <img className="transactionCircleMinus" src={source}/>
                <div className="paymentTextPosition">
                    <p className="transactionTextDecoration">{acquired}</p>
                    <p className="transactionTextDecoration transactionTextSmall">{place}</p>
                </div>
            </div>
            <p className="paymentTextSize">{symbol}${balance}</p>
        </div>
    );
}

export default HomeTransictions;
