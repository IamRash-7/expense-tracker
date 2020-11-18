import React,{useContext} from 'react';
import {GlobalContext} from '../context/global';

import {Transele} from './Transele'

export const Trlist = () => {
    const {transactions}=useContext(GlobalContext);


    return (
        <div>
            <h3>History</h3>
            <ul className="list">
            {transactions.map(transaction=>(<Transele key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}
