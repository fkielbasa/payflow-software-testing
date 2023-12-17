import React from 'react';
import "../styles/Transfers.css";
import TransferAccountNumber from "../elements/TransferAccountNumber";

function Transfers() {
    return (
        <div className="transfers-container">
            <div className="transfer-type">
                <h2>Wybierz typ przelewu</h2>
            </div>
            <div className="transfer-show-fields">
                <TransferAccountNumber />
            </div>
        </div>
    );
}

export default Transfers;

