import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

// Sample data
store.dispatch(addExpense({
    description: "Water bill",
    note: 'Note of water bill',
    amount: 4000
}))

store.dispatch(addExpense({
    description: "Gas bill",
    note: 'Note of gas bill',
    amount: 1000,
    createAt: 1000
}))

store.dispatch(addExpense({
    description: "Rent bill",
    note: 'Note of rent',
    amount: 109500
}))



store.dispatch(setTextFilter('bill'))

getVisibleExpenses(store.getState().expenses, store.getState().filter)

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>    
)

ReactDOM.render(jsx, document.getElementById('app'))