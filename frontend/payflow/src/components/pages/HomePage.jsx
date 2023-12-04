import React from 'react';
import '../styles/PagesCSS.css';
import Balance from "../elements/Balance";

function HomePage() {
    return (
        <div className="HomePage">
            <div className="balancePosition">
                <Balance currency = {'USD'} balance = {21.37} accountNumber={'3423870000441246075444'}/>
                <Balance currency = {'EUR'} balance = {69.42} accountNumber={'3124150000843646841238'}/>
            </div>
            <div>
                <div className="transaction">
                    <p>Transactions</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
