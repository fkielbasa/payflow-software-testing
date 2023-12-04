import React from 'react';
import '../styles/PagesCSS.css';
import UsdBalance from "../elements/UsdBalance";
import EurBalance from "../elements/EurBalance";

function HomePage() {
    return (
        <div className="HomePage">
            <div className="balancePosition">
                <UsdBalance/>
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
