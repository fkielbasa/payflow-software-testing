import pic from "../assets/1.jpg";
import DefaultPageCss from  './defaultPage.module.css'
const DefaultPage = () => {

    return (
        <div className={DefaultPageCss.container}>
            <div className={DefaultPageCss.infoWrapper}>
                <div>
                    <h1>Otwórz konto, zgarnij
                        do 450 zł</h1>
                    <p>i oszczędzaj nawet na <b>7%!</b></p>
                    <h2>Do konta mamy dla Ciebie jeszcze:</h2>
                    <ul className={DefaultPageCss.list}>
                        <li>pakiet bezpieczeństwa w którym podpowiadamy, jak chronić siebie i swoje finanse w sieci</li>
                        <li>premię za polecenie konta znajomym</li>
                    </ul>
                    <div>
                        <button>Sprawdź ofertę</button>
                    </div>

                </div>
                <div>
                    <img src={pic} alt="Zdjęcie przedstawia bank" className={DefaultPageCss.pic}/>
                </div>
            </div>

        </div>
    )
}
export default DefaultPage
