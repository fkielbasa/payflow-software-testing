
import styles from './SelectAccountNumber.module.css'

const SelectAccountNumber = (props) => {


    const addSpace = (s) => {
        let res = ''
        let counter = 0

        for (let i = s.length - 1; i >= 0; i--) {
            res = s[i] + res;
            counter++;

            if (counter === 4 && counter !== 0){
                res = ' ' + res;
                counter = 0
            }
        }
        return res
    }

    return(
        <select
            className={styles.container}
            onChange={(event) => props.selectedAccounts(event.target.value)}
        >
            <option>Wybierz numer rachunku</option>
            {props.data.map((a) => {
                return(
                    <option
                        content={"eqweqweqwe"}
                        className={styles.option}
                        value={a.id}
                    >
                        Bilans: {a.balance} {a.currency}: {addSpace(a.number)}
                    </option>
                )
            })}
        </select>

    )
}
export default SelectAccountNumber
