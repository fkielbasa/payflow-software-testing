import React, {useEffect, useState} from 'react';
import styles from "./Blik.module.css"


const URL_GET_BLIK = "http://localhost:8080/api/blik";

function Blik() {
    const [blikTimeInSec, setBlikTimeInSec] = useState(0);
    const [blikText, setBlikText] = useState("Wygeneruj blik");
    const [isActive, setIsActive] = useState(false)
    const [expirationTime, setExpirationTime] = useState(100)
    const [count, setCount] = useState(0);



    useEffect(() => {
        if (isActive){
            const tick = setInterval(() => {
                setBlikTimeInSec((prev) => {
                    console.log(prev)
                    if (prev <= 0){
                        console.log("koniec")
                        clearInterval(tick)
                        setBlikText("Odśwież blik")
                        setIsActive(false)
                    }
                    return prev - 1
                })
                setCount((prev) => prev + 1)


            }, 1000)
        }
    }, [isActive]);

    const handleButton = () => {
        getBlikResponse()
    };

    const getBlikResponse =  () => {
        fetch(URL_GET_BLIK)
            .then((response) => response.json())
            .then((data) => {
                let time = data.expirationTime.split(":")
                let sec = (+time[0]) * 60 * 60 + (+time[1]) * 60 + (+time[2])
                setBlikTimeInSec(sec)
                setExpirationTime(sec)
                setBlikText(data.code)
                setIsActive(true)
            })
            // .then(() => handleTimer())
            .catch((er) => console.log(er))
    }

    const convertTime = (sec) => {
        const min = Math.floor(sec / 60);
        const rest = sec % 60;
        return `${min}:${rest < 10 ? '0' : ''}${rest}`;
    }

    return (
        <div className={styles.container}>
            <h3>Blik</h3>
            <button onClick={handleButton} className={styles.btnWrapper}>
                <p id="blikBtn" className={styles.btnText}>{blikText}</p>
                <div className={styles.underlineWrap}>
                    <div className={styles.underlineShrink} style={isActive ? {width: `${100-((100/expirationTime)*count)}%`} : {width: '100%'}}></div>
                </div>
            </button>
            <div style={isActive ? {visibility: "visible"} : {visibility: "hidden"}}>
                <p>Twój kod wygaśnie za <span className={styles.time}>{convertTime(blikTimeInSec)}</span></p>
            </div>
        </div>
    );
}

export default Blik;
