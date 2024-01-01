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
                    <div className={styles.textJustify}>
                        <p className={styles.textMargin}>Dane identyfikacyjne:</p>
                    </div>
                    <GeneralForm showText={"Numer wniosku"} name={"applicationNumber"} type={"number"} maxLength={26} minLength={0} required={true}/>
                    <GeneralForm showText={"Miejscowość"} name={"day"} type={"text"} maxLength={40} minLength={0} required={true}/>
                    <GeneralForm showText={"Dzień"} name={"day"} type={"date"} maxLength={40} minLength={0} required={true}/>
                    <hr className={styles.hrLine}/>
                    <div className={styles.textJustify}>
                        <p className={styles.textMargin}>Dane kredytobiorcy:</p>
                    </div>
                    <GeneralForm showText={"Nazwisko"} name={"surname"} type={"text"} maxLength={40} minLength={0} required={true}/>
                    <GeneralForm showText={"Imie"} name={"name"} type={"text"} maxLength={40} minLength={0} required={true}/>
                    <GeneralForm showText={"Drugie imie"} name={"secondName"} type={"text"} maxLength={40} minLength={0} required={false}/>
                    <GeneralForm showText={"PESEL"} name={"pesel"} type={"number"} maxLength={11} minLength={0} required={true}/>

                    <div className={styles.buttonJustify}>
                        <input className={styles.submit} type="submit" value="Prześlij"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Credits;

