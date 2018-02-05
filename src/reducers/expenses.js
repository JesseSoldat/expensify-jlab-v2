import moment from 'moment';

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_EXPENSES': 
      console.log('SET_EXPENSES', action.expenses);   
      return action.expenses;

    case 'ADD_EXPENSE':
      console.log('ADD_EXPENSE', action.expense);
      return [
        ...state,
        action.expense
      ];
    
    default: 
      return state;
  }
};