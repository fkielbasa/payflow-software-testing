import React from 'react';
import styles from "../../elements/forms/GeneralForm.module.css";
import GeneralForm from "../../elements/forms/GeneralForm";

function Credits() {
    const handleSubmit = () => {
        console.log('Przelew wysłany');
        alert('Przelew wysłany');
    };

    return (
        <div className={styles.creditsContainer}>
            <div className={styles.alignContainer}>
                <h3>Formularz przyznania kredytu</h3>
                <form className={styles.formStyle} onSubmit={handleSubmit}>
                    <GeneralForm showText={"Numer konta"} name={"Numer konta"} type={"number"} maxLength={"26"} required={true}/>
                    <GeneralForm showText={"Odbiorca"} name={"Odbiorca"} type={"text"} maxLength={"40"} required={false}/>
                    <input className={styles.submit} type="submit" value="Prześlij"/>
                </form>
            </div>
        </div>
    );
}

export default Credits;

