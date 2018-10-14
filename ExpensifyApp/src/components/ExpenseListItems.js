import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItems = (props) => {
    const { id, description, amount, createAt } = props
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>{amount} - {createAt}</p>
        </div>
    )
}

export default ExpenseListItems;