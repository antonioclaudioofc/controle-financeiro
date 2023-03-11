import React, { useState } from "react"

export function Form() {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setIsExpense] = useState(false);
    return (
        <div>
            <div className="max-w-6xl my-5 mx-auto w-49/50 bg-white shadow-custom rounded-md flex justify-around py-4 px-0 gap-3 md:grid">
                <div className="flex flex-col">
                    <label htmlFor="Descrição"> Descrição</label>
                    <input className="outline-none rounded-md py-2 px-3 text-sm border border-solid border-[#ccc]" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Descrição"> Valor</label>
                    <input className="outline-none rounded-md py-2 px-3 text-sm border border-solid border-[#ccc]" /> 
                </div>
                <div className="flex justify-center">
                    <input type='radio' className="ml-5 accent-black mt-0" />
                    <label htmlFor="Entrada">Entrada</label>
                    <input type='radio' className="ml-5 accent-black mt-0" />
                    <label htmlFor="Entrada">Saida</label>
                </div>
                <button className="mx-2 my-3 border-none cursor-pointer text-white bg-teal-500"> Adcionar

                </button>
            </div>
        </div>
    )
}