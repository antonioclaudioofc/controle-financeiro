import { ResumeItem } from "./ResumeItem";
import { 
    FaRegArrowAltCircleDown,  
    FaRegArrowAltCircleUp,
    FaDollarSign
} from 'react-icons/fa';

interface Summary {
    income: number,
    expense: number,
    total: number
}

export function Resume(props: Summary) {
    return (
        <div className="max-w-6xl w-49/50 mx-auto my-0 -mt-14 flex justify-around gap-5 ">
            <ResumeItem title="Entrada" icon={FaRegArrowAltCircleUp} value={props.income} />
            <ResumeItem title="Saídas" icon={FaRegArrowAltCircleDown} value={props.expense}/>
            <ResumeItem title="Total" icon={FaDollarSign} value={props.total}/>
        </div>
    )
}