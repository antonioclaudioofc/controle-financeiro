import React, { useState } from "react";
import { Grid } from "./Gird";

interface Transaction {
    id: number;
    desc: string;
    amount: number;
    expense: boolean;
}

interface FormProps {
    handleAdd: (transaction: Transaction) => void;
}

export function Form(props: FormProps) {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState(0);
    const [isExpense, setIsExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction: Transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        props.handleAdd(transaction);
        setDesc("");
        setAmount(0);
    };

    return (
        <>
            <div>
                <div className="max-w-6xl my-5 mx-auto w-49/50 bg-white shadow-custom rounded-md flex justify-around py-4 px-0 gap-3 md:grid">
                    <div className="flex flex-col">
                        <label htmlFor="Descrição"> Descrição</label>
                        <input className="outline-none rounded-md py-2 px-3 text-sm border border-solid border-[#ccc]" value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Descrição"> Valor</label>
                        <input className="outline-none rounded-md py-2 px-3 text-sm border border-solid border-[#ccc]" type='number' value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
                    </div>
                    <div className="flex items-center">
                        <input type='radio' id="rIncome" defaultChecked name="group1" onChange={() => setIsExpense(false)} className="ml-5 mr-1 accent-black mt-0" />
                        <label htmlFor="rIncome">Entrada</label>
                        <input type='radio' id="rExpenses" name="group1" onChange={() => setIsExpense(true)} className="ml-5 mr-1 accent-black mt-0" />
                        <label htmlFor="rExpenses">Saida</label>
                    </div>
                    <button className="py-2 px-3 border-none cursor-pointer text-white bg-teal-500 rounded-md" onClick={handleSave}> Adicionar </button>
                </div>
            </div>

            <Grid />
        </>
    )
}
