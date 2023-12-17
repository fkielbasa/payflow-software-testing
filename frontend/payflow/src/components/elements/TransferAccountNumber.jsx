import React from 'react';
import "../styles/TransferAccountNumberStyles.css";


function TransferAccountNumber() {
    const handleSubmit = () => {
        console.log('Przelew wysłany')
        alert('Przelew wysłany');

    };

    return (
        <div className="transferAccountNumber-container">
            <h3>Na numer konta</h3>
            <form className="add-form" onSubmit={handleSubmit}>
                <label className="add-label">
                    Na numer konta:
                    <input
                        className="form-control me-2 add-margin"
                        type="text"
                        name=""
                    />
                </label>
                <br/>
                <label className="add-label">
                    Odbiorca:
                    <input
                        className="form-control me-2 add-margin"
                        type="text"
                        name=""
                    />
                </label>
                <br/>
                <label className="add-label">
                    Numer konta odbiorcy:
                    <input
                        className="form-control me-2 add-margin"
                        type="text"
                        name=""
                    />
                </label>
                <br/>
                <label className="add-label">
                    Tytuł:
                    <input
                        className="form-control me-2 add-margin"
                        type="text"
                        name=""
                    />
                </label>
                <br/>
                <label className="add-label">
                    Kwota:
                    <input
                        className="form-control me-2 add-margin"
                        type="text"
                        name=""
                    />
                </label>
                <br/>
                <label className="add-label">
                    Waluta:
                    <input
                        className="form-control me-2 add-margin"
                        type="text"
                        name=""
                    />
                </label>
                <br/>
                <label className="add-label">
                    Data przelewu:
                    <input
                        className="form-control me-2 add-margin"
                        type="text"
                        name=""
                    />
                </label>
                <br/>
                <button className="btn btn-color" type="submit">Wyślij</button>
            </form>
        </div>
    );
}

export default TransferAccountNumber;
