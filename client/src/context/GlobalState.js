import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  expenses: [],
  incomes: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getExpenses() {
    try {
      const res = await axios.get('/api/v1/expenses');

      dispatch({
        type: 'GET_EXPENSES',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'EXPENSE_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function getIncomes() {
    try {
      const res = await axios.get('/api/v1/incomes');

      dispatch({
        type: 'GET_INCOMES',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'INCOME_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteExpense(id) {
    try {
      await axios.delete(`/api/v1/expenses/${id}`);

      dispatch({
        type: 'DELETE_EXPENSE',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'EXPENSE_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteIncome(id) {
    try {
      await axios.delete(`/api/v1/incomes/${id}`);

      dispatch({
        type: 'DELETE_INCOME',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'INCOME_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addExpense(expense) {
    const config = {
      headers: { 'Content-Type': 'application/json'  } }

    try {
      const res = await axios.post('/api/v1/expenses', expense, config);

      dispatch({
        type: 'ADD_EXPENSE',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'EXPENSE_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addIncome(income) {
    const config = {
      headers: { 'Content-Type': 'application/json'  } }

    try {
      const res = await axios.post('/api/v1/incomes', income, config);

      dispatch({
        type: 'ADD_INCOME',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'INCOME_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    expenses: state.expenses,
    incomes: state.incomes,
    error: state.error,
    loading: state.loading,
    getExpenses,
    getIncomes,
    deleteExpense,
    addExpense,
    deleteIncome,
    addIncome
  }}>
    {children}
  </GlobalContext.Provider>);
}