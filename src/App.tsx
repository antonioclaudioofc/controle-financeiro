import './styles/main.css';

import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { Form } from './components/Form';

export function App() {
    return (
        <div className='bg-[#f2f2f2]'>
            <Header />
            <Resume />
            <Form />
        </div>
    )
}