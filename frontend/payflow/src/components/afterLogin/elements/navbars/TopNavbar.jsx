import React from 'react';
import styles from './TopNavbar.module.css';

import person from '../../../../assets/topNavbar/icon/person.svg';

function Home() {
    return (
        <div className={styles.topNavbar}>
            <div className={styles.topNavPositionFixed}>
                <p>John</p>
                <img className={styles.topNavImages} src={person} alt="person-icon"/>
            </div>
        </div>
    );
}

export default Home;
