import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  const { expenses, incomes } = useContext(GlobalContext);

  const Exp_amounts = expenses.map(expense => expense.amount);
  const Inc_amounts = incomes.map(inc => inc.amount);

  const income = Inc_amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    Exp_amounts.reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">${numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">${numberWithCommas(expense)}</p>
        </div>
      </div>
  )
}
