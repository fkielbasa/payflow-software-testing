import React from 'react';
import '../styles/HomeStyles.css';
import Balance from "../elements/Balance";
import TopNavbar from "../elements/TopNavbar";

import HomeTransactionsMinus from "../elements/HomeTransactionsMinus";
import HomeTransictionsPlus from "../elements/HomeTransictionsPlus";

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
                    <div className="shortPayment">
                        <p className="marginL">Transakcje</p>
                        <p className="smallLetters">Pokaż więcej</p>
                    </div>
                    <HomeTransactionsMinus balance={11.19}/>
                    <HomeTransactionsMinus balance={23.18}/>
                    <HomeTransictionsPlus balance={11.65}/>
                    <HomeTransactionsMinus balance={21.37}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
