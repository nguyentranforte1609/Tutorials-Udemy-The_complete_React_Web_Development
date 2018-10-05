import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title} </h1>
            {props.title && <h2>{props.subtitle} </h2>}
        </div>
    )
}
Header.defaultProps = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hand of a computer.'
}

export default Header;