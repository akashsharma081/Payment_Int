import React from 'react'
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { GlobalProvider } from '../Context/GlobalState';
export default function Paymenthistory() {
    return (
        <GlobalProvider>
            <div className="container">
            <Header/>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
       
            </div>
        </GlobalProvider>
    )
}
