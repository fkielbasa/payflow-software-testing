import React from 'react';
import styles from "./Transfers.module.css";
import TransferAccountNumber from "./TransfersAccountNumber";
import Blik from "./Blik";
import PhoneTransfer from "./PhoneTransfer";
import Cantor from "./cantor";
import { useSpring, animated } from 'react-spring';


function Transfers() {
    const fadeInAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)', width: '100%'},
        to: {opacity: 1, transform: 'translateY(0)', width: '100%'},
    });




    return (
        <animated.div style={fadeInAnimation}>

            <div className={styles.transfersContainer}>
                <div className={styles.transferType}>
                    <h2>Wybierz typ przelewu</h2>
                </div>
                <div className={styles.transferShowFields}>
                    <div className={styles.cellWrapper}>
                        <TransferAccountNumber/>
                        <Blik/>
                    </div>
                    <div className={styles.cellWrapper}>
                        <Cantor/>
                        <PhoneTransfer/>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default Transfers;

