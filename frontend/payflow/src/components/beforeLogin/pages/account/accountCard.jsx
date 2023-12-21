
import styles from './accountCard.module.css'
const AccountCard = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <p>{props.title}</p>
                <hr />
                <div>
                    <img src={props.img} alt=""/>
                </div>
            </div>
            <div className={styles.info}>
                <div>
                    <p>Opłata za konto</p>
                    <p><b>0 PLN</b></p>
                </div>
                <div>
                    <p>Opłata za kartę</p>
                    <p><b>0 PLN</b></p>
                </div>
                <div>
                    <p>Opłata za płatności</p>
                    <p><b>0 PLN</b></p>
                </div>
            </div>
        </div>
    )
}

export default AccountCard
