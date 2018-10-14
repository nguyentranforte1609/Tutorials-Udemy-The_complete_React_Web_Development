import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItems';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.length > 0 && (
            props.expenses.map((expense) => (
                <ExpenseListItem {...expense} key={expense.id} />
            ))
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filter),
        filter: state.filter
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;