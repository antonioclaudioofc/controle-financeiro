import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash
} from 'react-icons/fa'

export function GridItem({ item, onDelete }) {
    return (
        <tr>

            <td className="pt-4 break-all">
                {item.desc}
            </td>

            <td className="pt-4 break-all">
                {item.amount}
            </td>

            <td className="pt-4 text-center break-all">
                {item.expense ? (
                    < FaRegArrowAltCircleDown color='red' />
                ) : (
                    <FaRegArrowAltCircleUp color='green' />
                )}
            </td>
            <td className="pt-4 text-center break-all">
                <FaTrash onClick={() => onDelete(item.id)} />
            </td>
        </tr>
    )
}