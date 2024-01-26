import styles from './Account.module.css'
import CreditCard from "../cards/CreditCard";

const AccountCard= (props) => {
    console.log(props.cardNumber)
    return(
        <div style={{marginLeft: 20}}>
          <CreditCard currency={props.currency}
                      type={'Karta debetowa'}
                      balance={props.balance}
                      cardNumber={props.cardNumber}
                      owner={props.owner}
                      expiration={props.validDate}
                      cvv={props.cvv}
                      cardStyle={4}
                      details={false} id={1} size={"small"}/>
        </div>
    );
}
export default AccountCard;
