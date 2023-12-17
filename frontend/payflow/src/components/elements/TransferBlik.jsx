import React, { useState } from 'react';
import "../styles/TransferBlikStyles.css";

function TransferBlik() {
    const [blikCode, setBlikCode] = useState(null);

    const generateBlikCode = () => {
        const newBlikCode = Math.floor(100000 + Math.random() * 900000); // Generowanie sześcio-cyfrowego kodu
        setBlikCode(newBlikCode);
    };

    const handleButton = () => {
        generateBlikCode();
        alert('Blik');
    };

    return (
        <div className="transferBlik-container">
            <h3>Blikiem</h3>
            <button onClick={handleButton} className="btn btn-color" type="submit">Wygeneruj nowy kod Blik</button>
            <br/>
            <div className="blik">
                {blikCode !== null && <p>Kod Blik: {blikCode}</p>}
            </div>
        </div>
    );
}

export default TransferBlik;
