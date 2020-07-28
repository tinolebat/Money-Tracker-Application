import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Income = ({ income }) => {
  const { deleteIncome } = useContext(GlobalContext);

  const sign = '+';

  return (
    <li className={'plus'}>
      {income.text} <span>{sign}${numberWithCommas(Math.abs(income.amount))}</span><button onClick={() => deleteIncome(income._id)} className="delete-btn">x</button>
    </li>
  )
}
