import React, { useContext, useEffect } from 'react';
import { Income } from './Income';

import { GlobalContext } from '../context/GlobalState';

export const IncomeList = () => {
    const { incomes, getIncomes } = useContext(GlobalContext);
  
    useEffect(() => {
      getIncomes();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <>
        <h3> Incomes History</h3>
        <ul className="list">
          {incomes.map(income => (<Income key={income._id} income={income} />))}
        </ul>
      </>
    )
  }