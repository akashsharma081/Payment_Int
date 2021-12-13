import React,{useState,useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

function AddTransaction() {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState('');
    
    const { addTransaction} = useContext(GlobalContext);

    const onSubmit=e=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random() * 100000000),
            text,
            amount:+amount,
        }
        addTransaction(newTransaction);  
    }
    return (
    
        <>
        <h3>Add new transaction</h3>
        <form id="form-control" onSubmit={onSubmit}>
            
                <label htmlfor='text'>Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} id="text" placeholder="Enter text..." />
          
             <label htmlfor="amount">Amount <br />
            (negative - expense, positive - income)</label>
            <input  name="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" className="form-control"  placeholder="Enter amount" />   
            <button className="btn">Pay</button>
          
        </form>
      
       </>

        
    )
}

export default AddTransaction
