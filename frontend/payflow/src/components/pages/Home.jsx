import React from 'react';
import '../styles/PagesCSS.css';
import Balance from "../elements/Balance";

function Home() {
    return (
        <div className="homePage">
            <div className="topNavbar">
                <p>test</p>
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
            </div>
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

export default Home;
