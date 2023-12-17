import React from 'react';
import '../styles/HomeStyles.css';
import CreditCard from "../elements/CreditCard";
import '../styles/aaaElementsPositionDebug.css';

import HomeTransactions from "../elements/HomeTransactions";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="homePage">
            {/*<TopNavbar/>*/}
            <div className="contentWrapper">
                <div className="leftSidePosition">
                    <div className="balancePosition">
                        <CreditCard currency={'USD'} type={'Karta bankomatowa'} balance={21.37} accountNumber={'3423870000441246075444'} Owner={'Johnny Johinnson'} expirationMonth={4} expirationYear={24} cardStyle={1} details={true}/>
                        <CreditCard currency={'EUR'} type={'Karta bankomatowa'} balance={69.42} accountNumber={'3124150000843646841238'} Owner={'Johnny Johinnson'} expirationMonth={7} expirationYear={25} cardStyle={2} details={true}/>
                        <CreditCard currency={'PLN'} type={'Karta kredytowa'} balance={1069.42} accountNumber={'4287931654718293458712'} Owner={'Johnny Johinnson'} expirationMonth={12} expirationYear={27} cardStyle={4} details={true}/>
                    </div>
                </div>
                <div className="transactionPosition">
                    <div className="shortPayment">
                        <p className="marginL">Ostatnie transakcje</p>
                        <Link to="/transactions" className="smallLetters">Pokaż więcej</Link>
                    </div>
                    <HomeTransactions maxPerPage={4}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
