import styles from './itemCreditCard.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../../../config/shared";
import {config} from "../../../../config/authConfig";
import {formatAccountNumber} from "../../../utils/formatAccountNumber";
import {generateRandomColor, generateRandomLightColor} from "../../../utils/backgroundStyles";

const ItemCreditCard = (props) => {
    const [acInfo, setAcInfo] = useState({})
    useEffect(() => {
        const getAccountNumberInfo = () => {
            axios
                .get(
                    `${BASE_URL}/api/v1/numbers/${props.credit.idAccountNumber}`,
                    config
                )
                .then((res) => {
                    setAcInfo(res.data)
                })
                .catch((error) => {
                    // TODO catch
                })
        }
        getAccountNumberInfo()
    }, []);

    const gradientStyle = {
        background: `linear-gradient(to right bottom, ${generateRandomColor()}, ${generateRandomColor()})`,
    };

    return(
        <div
            // style={gradientStyle}
            style={{backgroundColor: `${generateRandomLightColor()}`}}
            className={styles.container}>
            <p>Kredyt na kwotę: <span className={styles.colorText}>{props.credit.amount} {acInfo.currency}</span></p>
            <img
                src={require('../../../../assets/loan.png')}
                alt={"pożyczka"}
                className={styles.img}
            />
            <p>Rachunek: <span className={styles.colorText}>{acInfo.currency} {formatAccountNumber(acInfo.number)}</span></p>
            <p>Okres spłaty kredytu:
                od <span className={styles.colorText}>{` ${props.credit.startDate} `}</span>
                do <span className={styles.colorText}>{` ${props.credit.endDate} `}</span>
            </p>
            <p className={styles.interest}>Oprocentowanie:
                <span className={styles.colorText}>{` ${props.credit.interestRate} `}</span>
            </p>
        </div>
)
}
export default ItemCreditCard
