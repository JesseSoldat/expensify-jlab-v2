import database from '../firebase/firebase';

let rootDatabase;

if(process.env.NODE_ENV === 'test') {
  rootDatabase = 'test';
} else if(process.env.NODE_ENV === 'production') {
  rootDatabase = 'production';
} else {
  process.env.NODE_ENV = 'development'
  rootDatabase = 'development';
}

//ADD-------------------------------
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`${rootDatabase}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
  };
};

//SET-------------------------------
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref(`${rootDatabase}/expenses`)
      .once('value')
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};