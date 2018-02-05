import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">
              Edit Expense
            </h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm />
          <button className="button button--secondary">
            Remove Expense
          </button>
        </div>
      </div>
    )
  }
}

export default connect(undefined)(EditExpensePage);