import React from 'react';
import '../styles/HomeTransictionsStyles.css';
import circleMinus from "../../assets/transations/circleMinus.png";


function HomeTransictionsMinus(props) {
    const balance = props.balance;
    return (
        <div className="shortPayment">
            <div className="shortPaymentText">
                <img className="transactionCircleMinus" src={circleMinus}/>
                <div className="paymentTextPosition">
                    <p className="transactionTextDecoration">Pizzeria</p>
                    <p className="transactionTextDecoration">Tarnów ul. Wałowa</p>
                </div>
            </div>
            <p className="paymentTextSize">-${balance}</p>
        </div>
    );
}

export default HomeTransictionsMinus;
