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