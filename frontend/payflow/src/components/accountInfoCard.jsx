
import AccountInfoCardCss from './accountInfoCard.module.css'

const AccountInfoCard = (props) => {

    return (
        <div className={AccountInfoCardCss.card}>
            <div className={AccountInfoCardCss.title}>
                <p>{props.title}</p>
                {props.icon}
            </div>
            <p className={AccountInfoCardCss.desc}>{props.description}</p>
        </div>
    )
}
export default AccountInfoCard
