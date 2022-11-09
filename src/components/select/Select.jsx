import { useContext, useEffect, useState } from 'react';
import { RateContext } from '../../contexts/rateContext';
import handlerConvert from '../../services/convert';
import './Select.scss';

export default function Select({ currencies }) {

    const [isOpen, setIsOpen] = useState(false)
    const [currentCurrency, setCurrentCurrency] = useState()
    const {contextRate} = useContext(RateContext);

    useEffect(() => {
        setCurrentCurrency(currencies[0])
    },[currencies])

    return (
        <ul className={`select ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <li>
                {currentCurrency}
                <ul>
                    {
                        currencies.map((currency, i=0) =>
                            <li onClick={({target}) => {setCurrentCurrency(currency); target.parentElement.parentElement.parentElement.nextElementSibling.dataset.currency = currency; handlerConvert(contextRate)}} key={i}>
                                {currency}
                            </li>
                        )
                    }
                </ul>
            </li>
        </ul>
    )
}