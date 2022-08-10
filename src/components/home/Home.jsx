import { useEffect, useState } from 'react';
import ReceiveData from '../../services/receiveData';
import Select from '../select/Select';
import './Home.scss';

export default function Home() {

    const [rate, setRate] = useState([]);

    useEffect(() => {
        ReceiveData('team')
            .then((data) => setRate(data))
    }, [])

    const board = ['USD', 'EUR'];

    console.log(rate);

    return (
        <div className="home">
            <header>
                <div className="board">
                    <h1>
                        Обмін валют
                    </h1>

                    <table>
                        <tr>
                            <td>
                                купівля
                            </td>
                            <td></td>
                            <td>
                                продаж
                            </td>
                        </tr>
                        {
                            board.map(currency =>
                                <tr>
                                    <td>
                                        {
                                            rate.length ? rate.find(rateCurrency => rateCurrency.ccy === currency).buy : ''
                                        }
                                    </td>
                                    <td>
                                        {currency}
                                    </td>
                                    <td>
                                        {
                                            rate.length ? rate.find(rateCurrency => rateCurrency.ccy === currency).sale : ''
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </table>
                </div>
            </header>

            <main className='container'>
                <form className='row'>
                    <div className="column">
                        <Select />
                        <input type="number" minLength={1}  />
                    </div>
                </form>
            </main>
        </div>
    )
}