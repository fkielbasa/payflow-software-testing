import StartNavbar from "./startNavbar";
import pic from '../assets/bank.jpg'
const StartPage = () => {

    return(
        <div>
            <StartNavbar />
            <div>
                <img src={pic} alt="" style={{width: '200px'}}/>
            </div>
        </div>
    )
}

export default StartPage
