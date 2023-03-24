import './styles/main.css';

import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { Form } from './components/Form';
import { useState, useEffect } from 'react';

export interface Transaction {
    expense: boolean;
    amount: number;
}


export function App() {
    const [transactionsList, setTransactionsList] = useState<Transaction[]>([]);
    const [income, setIncome] = useState<number>(0);
    const [expense, setExpense] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const data = localStorage.getItem('transactions');
        if (data) {
            setTransactionsList(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transaction) => transaction.amount);

        const amountIncome = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => transaction.amount);

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0);
        const total = Math.abs(income - expense);

        setIncome(income);
        setExpense(expense);
        setTotal(total);
    }, [transactionsList]);

    const handleAdd = (transaction: Transaction) => {
        const newArrayTranscation = [...transactionsList, transaction]

        setTransactionsList(newArrayTranscation)

        localStorage.setItem('transactions', JSON.stringify(newArrayTranscation))
    }

    return (
        <div className='bg-[#f2f2f2]'>
            <Header />
            <Resume income={income} expense={expense} total={total} />
            <Form handleAdd={handleAdd} transactionList={transactionsList} setTransactionsList/>
        </div>
    )

}


