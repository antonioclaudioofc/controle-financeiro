interface PurchaseProps {

}

export function Grid(props: PurchaseProps) {

    const onDelete = (id) => {
        const newArray = itens.filter((transaction) => transaction.id !== id);
        setItens(newArray);
        localStorage.setItem('transactions', JSON.stringify(newArray))
    }

    return (
        <>
            <table className="w-49/50 bg-white p-5 shadow-custom rounded-md max-w-6xl mx-5 my-auto">
                <thead>

                    <tr className="border-b-2 border-gray-400 shadow-md pb-1 w-1/10">
                        Descrição
                    </tr>

                    <tr className="border-b-2 border-gray-400 shadow-md pb-1 w-4/10">
                        Valor
                    </tr>

                    <tr className="border-b-2 border-gray-400 shadow-md pb-1 w-1/10">
                        Tipo
                    </tr>

                    <tr className="border-b-2 border-gray-400 shadow-md pb-1 w-1/10">
                    </tr>
                </thead>
                <tbody>
                    {props.itens?.maps((item), index) => {
                        <GridItem key={index} item={item} />
                    }}
                </tbody>
            </table>
        </>
    )
}