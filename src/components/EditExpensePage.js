import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
     
export class EditExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('../dashboard');
  }
  render() {
    console.log(this.props.expense);
    
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
          <ExpenseForm 
            onSubmit={this.onSubmit}
            expense={this.props.expense}
          />
          <button className="button button--secondary">
            Remove Expense
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);