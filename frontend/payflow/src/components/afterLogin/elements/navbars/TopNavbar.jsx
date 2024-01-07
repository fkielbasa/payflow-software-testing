import React, {useState} from 'react';
import styles from './TopNavbar.module.css';

import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import {user} from "../../../../config/authConfig";
import {Link, useNavigate} from "react-router-dom";
import Logo from "./Logo";

function Home() {
    let navigate = useNavigate()

    const [isHover, setIsHover] = useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    const logout = () => {
        localStorage.clear()
        navigate('/home')
        window.location.reload()
    }

    const showSettings = () => {
        alert("Nie ma i nie będzie")
    }

    return (
        <div className={styles.topNavbar}>
            <div>
                <Link to="/home">
                    <Logo/>
                </Link>
            </div>
            <div className={styles.accoundPosition}>
                <div
                    className={isHover ? [styles.accountDisplay, styles.shadow].join(' ') : styles.accountDisplay}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    <div className={styles.columnInfo}>
                        <FaUser/>
                        <p>{user != null ? user.name : "string"}</p>
                        <IoIosArrowDown/>
                    </div>
                    {isHover && (
                        <div className={styles.accountInfo}>
                            <div
                                className={styles.columnInfo}
                                onClick={showSettings}
                            >
                                <IoMdSettings/>
                                <p>Ustawienia</p>
                            </div>
                            <div
                                className={styles.columnInfo}
                                onClick={logout}
                            >
                                <TbLogout/>
                                <p>Wyloguj</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
