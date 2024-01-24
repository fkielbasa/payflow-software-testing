import React, { useState } from 'react';
import styles from './TopNavbar.module.css';

import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { TOKEN_KEY, user } from "../../../../config/authConfig";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { backgroundStyles2 } from '../../../utils/backgroundStyles';

function TopNavbar() {
    let navigate = useNavigate()

    const [isHover, setIsHover] = useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    const logout = () => {
        localStorage.removeItem(TOKEN_KEY)
        navigate('/home')
        window.location.reload()
    }

    const showSettings = () => {
        navigate('/profile')
    }

    return (
        <div className={styles.topNavbar}>
            <div>
                <Link to="/home">
                    <Logo />
                </Link>
            </div>
            <div
                className={styles.accoundPosition}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
            >
                <div
                    className={`${styles.accountDisplay} `}
                >
                    <div className={styles.columnInfo}>
                        <FaUser />
                        <p>{user != null ? user.name : "string"}</p>
                        <IoIosArrowDown />
                    </div>
                    {isHover && (
                        <div className={`${styles.accountDetails}`} style={backgroundStyles2}>
                            <span></span>
                            <div
                                className={styles.columnInfo}
                                onClick={showSettings}
                            >
                                <p>Konto</p>
                            </div>
                            <div
                                className={styles.columnInfo}
                                onClick={logout}
                            >
                                <p>Wyloguj</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;
