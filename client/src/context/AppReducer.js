export default (state, action) => {
  switch(action.type) {
    case 'GET_EXPENSES':
      return {
        ...state,
        loading: false,
        expenses: action.payload
      }
    case 'GET_INCOMES':
      return {
        ...state,
        loading: false,
        incomes: action.payload
      }
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense._id !== action.payload)
      }
    case 'DELETE_INCOME':
      return {
        ...state,
        incomes: state.incomes.filter(income => income._id !== action.payload)
      }
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      }
    case 'ADD_INCOME':
      return {
        ...state,
        incomes: [...state.incomes, action.payload]
      }
    case 'EXPENSE_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'INCOME_ERROR':
      return {
        ...state,
        error: action.payload
        }
    default:
      return state;
  }
}