import React, { useContext, useEffect } from 'react';
import { Expense } from './Expense';


import { GlobalContext } from '../context/GlobalState';

export const ExpenseList = () => {
  const { expenses, getExpenses } = useContext(GlobalContext);
  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      <h3>Expense History</h3>
      <ul className="list">
        {expenses.map(expense => (<Expense key={expense._id} expense={expense} />))}
      </ul>
    </>
  )
}


