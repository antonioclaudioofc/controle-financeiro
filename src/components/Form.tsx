import React, { useState } from "react"

export function Form() {

    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setIsExpense] = useState(false);


    const handleSave = () => {
        if (!desc || !amount) {
            alert('Informe a descrição e o valor!')
            return
        } else if (amount < '1') {
            alert('O valor tem que ser positivo!')
            return
        }
    }

    return (
        <div>
            <div className="max-w-6xl my-5 mx-auto w-49/50 bg-white shadow-custom rounded-md flex justify-around py-4 px-0 gap-3 md:grid">
                <div className="flex flex-col">
                    <label htmlFor="Descrição"> Descrição</label>
                    <input className="outline-none rounded-md py-2 px-3 text-sm border border-solid border-[#ccc]" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Descrição"> Valor</label>
                    <input className="outline-none rounded-md py-2 px-3 text-sm border border-solid border-[#ccc]" type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="flex items-center">
                    <input type='radio' id="rIncome" defaultChecked name="group1" onChange={() => setIsExpense(!isExpense)} className="ml-5 mr-1 accent-black mt-0" />
                    <label htmlFor="rIncome">Entrada</label>
                    <input type='radio' id="rExpenses" name="group1" onChange={() => setIsExpense(!isExpense)} className="ml-5 mr-1 accent-black mt-0" />
                    <label htmlFor="Entrada">Saida</label>
                </div>
                <button className="py-2 px-3 border-none cursor-pointer text-white bg-teal-500 rounded-md"> Adicionar

                </button>
            </div>
        </div>
    )
}