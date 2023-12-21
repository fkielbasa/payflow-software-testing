
import styles from './choiceCard.module.css'
const ChoiceCard = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={props.filled ? styles.fill : null}></div>
            </div>
            <p>{props.title}</p>
        </div>
    )
}
export default ChoiceCard
