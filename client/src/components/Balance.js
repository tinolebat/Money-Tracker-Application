import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { expenses, incomes } = useContext(GlobalContext);

  const Exp_amounts = expenses.map(expense => expense.amount);
  const Inc_amounts = incomes.map(inc => inc.amount);

  const totalExp = Exp_amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalInc = Inc_amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const total = totalInc - totalExp;

  return (
    <>
      <h4>Your Balance</h4>
    <h1>${numberWithCommas(total)}</h1>
    </>
  )
}
