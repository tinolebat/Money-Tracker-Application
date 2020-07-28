import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { ExpenseList } from './components/ExpenseList';
import { IncomeList } from './components/IncomeList';
import { AddExpense } from './components/AddExpense';
import { AddIncome } from './components/AddIncome';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <div className="history-container">
          <div>
            <IncomeList />          
          </div>
          <div>
            <ExpenseList />
          </div>               
        </div>

        <div className="addTransact-container">
          <div> <AddIncome /> </div>
          <div> <AddExpense /> </div>        
        </div>         
      </div>
    </GlobalProvider>
  );
}

export default App;
