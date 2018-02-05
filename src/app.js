import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, {history} from './routers/AppRouter';
import { firebase } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';

console.log('app works!');
const store = configureStore();

const jsx = (
  <Provider store={store} >
    <AppRouter/>
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<div>Loading...</div>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  renderApp();
});
