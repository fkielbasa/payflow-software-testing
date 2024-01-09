
import InfoCardCss from './infoCard.module.css'

const InfoCard = (props) => {

    return (
        <div className={InfoCardCss.card}>
            <div className={InfoCardCss.title}>
                <p>{props.title}</p>
                {props.icon}
            </div>
            <p className={InfoCardCss.desc}>{props.description}</p>
        </div>
    )
}
export default InfoCard
