import StartCreditsCss from './startCredits.module.css'
import Credit from '../../../../assets/beforeLogin/credit.png'
const StartCredits = () => {

    return (
        <div className={StartCreditsCss.container}>
            <div><h1>Kredyty</h1></div>
            <div className={StartCreditsCss.wrapper}>
                <div>
                    <img src={Credit} alt=""/>
                </div>
                <div>
                    <h4>Przekonaj się, dlaczego warto wziąć kredyt hipoteczny w PayFlow:</h4>
                    <ul>
                        <li>0% prowizji za udzielenie kredytu</li>
                        <li>masz kilka wariantów promocji do wyboru
                            (Active, Intensive lub bez segmentu)</li>
                        <li>dodatkowa obniżka oprocentowania o 0,2 p.p. jeśli nieruchomość spełnia warunki ekokredytu hipotecznego </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>Najważniejsze zasady programu Bezpieczny kredyt 2% to:</h3>
                <ul>
                    <li>nie możesz mieć ukończonych 45 lat </li>
                    <li>nie możesz mieć prawa do nieruchomości – kredyt z dopłatą musisz przeznaczyć na pierwsze mieszkanie lub dom</li>
                    <li>nie jesteś i w ciągu ostatnich 36 miesięcy przed dniem złożenia wniosku nie mogłeś być stroną umowy kredytu hipotecznego przeznaczonego na pokrycie wydatków ponoszonych w związku z nabyciem prawa własności lub spółdzielczego własnościowego prawa do nieruchomości mieszkalnej</li>
                    <li>minimalny wkład własny to 20% wartości nieruchomości, ale nie więcej niż 200 000 zł</li>
                    <li>kredyt może zostać udzielony na co najmniej 15 lat</li>
                </ul>
            </div>
        </div>
    )
}
export default StartCredits
