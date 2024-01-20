import CantorExchange from "./cantorExchange";
import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {config} from "../../../../config/authConfig";
import {BASE_URL} from "../../../../config/shared";
import ExchangeChart from "./exchangeChart";
import styles from './cantor.module.css'


const Cantor = () => {
    const [dataRate, setDataRate] = useState([])

    useEffect(() => {
        const getExchangeRates = () => {
            axios
                .get(
                    `${BASE_URL}/api/v1/exchange-rates?last=${7}`,
                    config
                )
                .then(r => {
                    setDataRate(r.data)
                    console.log(r.data)
                })
                .catch(er => console.log("Couldn't get rates"))
        }
        getExchangeRates()
    }, []);


    return(
        <div className={styles.containerFluid}>
            <div className={styles.exchangeBar}>
                <CantorExchange />
            </div>
            
        </div>
    )
}
export default Cantor
