import React from 'react'
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import AddTransaction from './AddTransaction';
import { GlobalProvider } from '../Context/GlobalState';
export default function Paymenthistory() {
    return (
        <GlobalProvider>
            <div className="container1">
            <Header/>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
            </div>
        </GlobalProvider>
    )
}
