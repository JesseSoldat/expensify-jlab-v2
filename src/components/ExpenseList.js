import React from 'react';
import { connect } from 'react-redux';

export const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        List
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseList);