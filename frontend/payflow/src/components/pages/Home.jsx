import React from 'react';
import '../styles/HomeStyles.css';
import Balance from "../elements/Balance";
import TopNavbar from "../elements/TopNavbar";
import '../styles/ElementsPositionDebug.css';

import HomeTransactions from "../elements/HomeTransactions";

function Home() {
    return (
        <div className="homePage">
            <TopNavbar/>
            <div className="contentWrapper">
                <div className="leftSidePosition">
                    <div className="balancePosition">
                        <Balance currency={'USD'} balance={21.37} accountNumber={'3423870000441246075444'}/>
                        <Balance currency={'EUR'} balance={69.42} accountNumber={'3124150000843646841238'}/>
                    </div>
                    <div className="chartPosition">
                        <p>test</p>
                    </div>
                </div>
                <div className="transactionPosition">
                    <div className="shortPayment">
                        <p className="marginL">Ostatnie transakcje</p>
                        <p className="smallLetters">Pokaż więcej</p>
                    </div>
                    <HomeTransactions balance={11.19} type={'negative'} acquired={'Restauracja Wartka'}
                                      place={'Tarnów 33-100, ul. Rynek 2'}/>
                    <HomeTransactions balance={23.18} type={'negative'} acquired={'Łukasz Babicz. Usługi ogrodnicze'}
                                      place={'Tarnów 33-101, ul. Królowej Jadwigi 32'}/>
                    <HomeTransactions balance={950.00} type={'positive'} acquired={'Stypendium naukowe'}
                                      place={'Tarnów 33-100, ul. Mickiewicza 8'}/>
                    <HomeTransactions balance={21.37} type={'negative'} acquired={'PSB MARKA'}
                                      place={'Kraków 30-394, ul. Skotnicka 211'}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
