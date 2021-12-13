import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

function Balance(props) {
    
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <>
            <h4>Amount</h4>
            <h1>${total}</h1>
            <div><p>User course:{props.name}</p></div>
 
        </>
    )
}

export default Balance
