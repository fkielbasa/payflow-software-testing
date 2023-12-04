import React from 'react';
import '../styles/PagesCSS.css';
import Balance from "../elements/Balance";
import EurBalance from "../elements/EurBalance";

function HomePage() {
    return (
        <div className="HomePage">
            <div className="balancePosition">
                <Balance currency = {'USD'}/>
                <EurBalance/>
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
