import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';

export class AddExpensePage extends Component {

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm />
        </div>
      </div>
    );
  }b
}

export default connect(undefined)(AddExpensePage);