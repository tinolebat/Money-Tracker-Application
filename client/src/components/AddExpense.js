import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddExpense = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addExpense } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newExpense = {
      text,
      amount: +amount
    }
    addExpense(newExpense);
  }

  return (
    <>
      <div>
      <h3>Add new Expense</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
          </label>
          <input type="text" pattern="[0-9]*" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn-expense">Add Expense</button>
      </form>
      </div>
    </>
  )
}
