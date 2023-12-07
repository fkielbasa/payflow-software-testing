import React from 'react';
import '../styles/HomeStyles.css';
import Balance from "../elements/Balance";
import TopNavbar from "../elements/TopNavbar";

import circleMinus from "../../assets/transations/circleMinus.png";
import circlePlus from "../../assets/transations/circlePlus.png";

function Home() {
    return (
        <div className="homePage">
            <TopNavbar/>
            <div className="contentWrapper">
                <div className="balancePosition">
                    <Balance currency={'USD'} balance={21.37} accountNumber={'3423870000441246075444'}/>
                    <Balance currency={'EUR'} balance={69.42} accountNumber={'3124150000843646841238'}/>
                </div>
                <div className="transactionPosition">
                    <p>Transakcje</p>
                    <div className="shortPayment">
                        <div className="shortPaymentText">
                            <img className="transactionCircleMinus" src={circleMinus}/>
                            <div className="paymentTextPosition">
                                <p>Pizzeria</p>
                                <p>Tarnów ul. Wałowa</p>
                            </div>
                        </div>
                        <p>-$21.37</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
