import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Expense = ({ expense }) => {
  const { deleteExpense } = useContext(GlobalContext);

  const sign = '-';


  return (
    <li className={ 'minus' }>
      {expense.text} <span>{sign}${numberWithCommas(Math.abs(expense.amount))}</span>
      <button onClick={() => deleteExpense(expense._id)} className="delete-btn">x</button>
    </li>
  )
}
