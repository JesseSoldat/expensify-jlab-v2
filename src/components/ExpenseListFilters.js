import 'react-dates/initialize';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = () => {

  }

  onFocusChange = () => {

  }

  onTextChange = () => {

  }

  onSortChange = () => {

  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input type="text" 
              className="text-input"
              placeholder="Search Expenses"
              
            />
          </div>

          <div className="input-group__item">
            <select
              className="select"
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className="input-group__item">
            <DateRangePicker 
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
              startDateId={'142342342'}
              endDateId={'14323423'}
            />
          </div>

        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);