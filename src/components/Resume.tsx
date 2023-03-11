import { ResumeItem } from "./ResumeItem";
import { 
    FaRegArrowAltCircleDown,  
    FaRegArrowAltCircleUp,
    FaDollarSign
} from 'react-icons/fa';

export function Resume() {
    return (
        <div className="max-w-6xl w-49/50 mx-auto my-0 -mt-14 flex justify-around gap-5 ">
            <ResumeItem title="Entrada" icon={FaRegArrowAltCircleUp} value={12121} />
            <ResumeItem title="Saídas" icon={FaRegArrowAltCircleDown} value={1212}/>
            <ResumeItem title="Total" icon={FaDollarSign} value={100}/>
        </div>
    )
}