import React from 'react';
import "../styles/TransferBlikStyles.css";


function TransferBlik() {

    return (
        <div className="transferBlik-container">
            <h3>Na numer konta</h3>
            <button className="btn btn-color" type="submit">Wygeneruj nowy kod Blik</button>

        </div>
    );
}

export default TransferBlik;
