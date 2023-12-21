import React from 'react';
import styles from './Cards.module.css';
import CreditCard from "./CreditCard";

function Cards() {
    return (
        <div>
            <div className={styles.cardsContainer}>
                <CreditCard currency={'USD'} type={'Karta bankomatowa'} balance={21.37}
                            accountNumber={'3423870000441246075444'} Owner={'Johnny Johinnson'} expirationMonth={4}
                            expirationYear={24} cardStyle={1} details={true} graph={true}/>
                <CreditCard currency={'EUR'} type={'Karta bankomatowa'} balance={69.42}
                            accountNumber={'3124150000843646841238'} Owner={'Johnny Johinnson'} expirationMonth={7}
                            expirationYear={25} cardStyle={2} details={true} graph={true}/>
                <CreditCard currency={'PLN'} type={'Karta kredytowa'} balance={1069.42}
                            accountNumber={'4287931654718293458712'} Owner={'Johnny Johinnson'} expirationMonth={12}
                            expirationYear={27} cardStyle={4} details={true} graph={true}/>

            </div>
            <div>
                <p>jakieś piękne wykresy będą tu niżej:</p>
            </div>
        </div>
    );
}

export default Cards;

