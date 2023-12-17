import React from 'react';
import "../styles/TransfersStyles.css";
import TransferAccountNumber from "../elements/TransferAccountNumber";
import TransferBlik from "../elements/TransferBlik";

function Transfers() {
    return (
        <div className="transfers-container">
            <div className="transfer-type">
                <h2>Wybierz typ przelewu</h2>
            </div>
            <div className="transfer-show-fields">
                <TransferAccountNumber />
                <TransferBlik />
            </div>
        </div>
    );
}

export default Transfers;

