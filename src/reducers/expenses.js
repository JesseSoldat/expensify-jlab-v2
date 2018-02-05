import moment from 'moment';

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_EXPENSES': 
      // console.log('SET_EXPENSES', action.expenses);   
      return action.expenses;

    case 'ADD_EXPENSE':
      // console.log('ADD_EXPENSE', action.expense);
      return [
        ...state,
        action.expense
      ];

    case 'EDIT_EXPENSE':
      // console.log('EDIT_EXPENSE', action.id, action.updates);
      return state.map(expense => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });

    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    
    default: 
      return state;
  }
};