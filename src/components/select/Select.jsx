import { useState } from 'react';
import './Select.scss';

export default function Select({ currencies }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <ul className={`select ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <li>
                head
                <ul>
                    <li>body</li>
                    <li>body</li>
                    <li>body</li>
                </ul>
            </li>
        </ul>
    )
}