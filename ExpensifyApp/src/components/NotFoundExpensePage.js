import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundExpensePage = () => (
    <div>
        <h1>404 Not Found.</h1>
        <Link to="/">Go home</Link>
    </div>
)

export default NotFoundExpensePage;