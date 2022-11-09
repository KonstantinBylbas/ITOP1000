import { useContext, useEffect, useState } from 'react';
import { RateContext } from '../../contexts/rateContext';
import handlerConvert from '../../services/convert';
import ReceiveData from '../../services/receiveData';
import Select from '../select/Select';
import './Home.scss';

export default function Home() {

    const { contextRate, setContextRate } = useContext(RateContext);
    const board = ['USD', 'EUR'];

    useEffect(() => {
        ReceiveData()
            .then(data => setContextRate([...contextRate, ...data]))
    }, [])

    return (
        <div className="home">
            <header>
                <div className="board">
                    <h1>
                        Обмін валют
                    </h1>

                    <table>
                        <thead>
                            <tr>
                                {
                                    ['валюта', 'курс'].map((row, i = 0) =>
                                        <td key={i}>{row}</td>
                                    )
                                }
                            </tr>
                        </thead>
                        {
                            board.map((currency, i = 0) =>
                                <tbody key={i}>
                                    <tr>
                                        <td>
                                            {currency}
                                        </td>
                                        <td>
                                            {
                                                contextRate.length > 1 ? contextRate.find(rateCurrency => rateCurrency.cc === currency).rate : ''
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </header>

            <main className='container'>
                <form className='row'>
                    {
                        [2, 1].map((column, key = 0) =>
                            <div className="column" key={key++}>
                                <Select currencies={contextRate.map(currency => currency.cc)} />
                                <input type="number" minLength={1} data-currency={contextRate[0].cc} onChange={({ target }) => handlerConvert(contextRate, column, target)} />
                            </div>
                        )
                    }
                </form>
            </main>
        </div>
    )
}