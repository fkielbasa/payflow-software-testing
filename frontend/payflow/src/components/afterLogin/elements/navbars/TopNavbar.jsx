import React, {useState} from 'react';
import styles from './TopNavbar.module.css';

import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
    const [isHover, setIsHover] = useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    return (
        <div className={styles.topNavbar}>
            <div
                className={isHover ? [styles.accountDisplay, styles.shadow].join(' ') : styles.accountDisplay}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <div className={styles.columnInfo}>
                    <FaUser />
                    <p>John</p>
                    <IoIosArrowDown />
                </div>
                {isHover && (
                    <div className={styles.accountInfo}>
                        <div className={styles.columnInfo}>
                            <IoMdSettings />
                            <p>ustawienia</p>
                        </div>
                        <div className={styles.columnInfo}>
                            <TbLogout />
                            <p>wyloguj</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Home;
