import React from 'react';
import '../styles/HomeTransictionsStyles.css';
import circlePlus from "../../assets/transations/circlePlus.png";


function HomeTransictionsPlus(props) {
    const balance = props.balance
    return (
        <div className="shortPayment">
            <div className="shortPaymentText">
                <img className="transactionCircleMinus" src={circlePlus}/>
                <div className="paymentTextPosition">
                    <p className="transactionTextDecoration">Tomek</p>
                    <p className="transactionTextDecoration">Przychodzące</p>
                </div>
            </div>
            <p className="paymentTextSize">+${balance}</p>
        </div>
    );
}

export default HomeTransictionsPlus;
