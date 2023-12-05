import React from 'react';
import '../styles/HomeStyles.css';
import Balance from "../elements/Balance";
import TopNavbar from "../elements/TopNavbar";

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
                    <p>Transactions</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
