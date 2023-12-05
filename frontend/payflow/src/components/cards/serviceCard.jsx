
import style from './serviceCard.module.css'

const ServiceCard = (props) => {

    return(
        <div className={style.wrapper}>
            <img className={style.img} src={props.img} alt="Zdjęcie przedstawia usługę bankową."/>
            <p>{props.title}</p>
        </div>
    )
}
export default ServiceCard
