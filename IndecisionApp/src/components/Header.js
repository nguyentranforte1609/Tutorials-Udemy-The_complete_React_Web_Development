import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title} </h1>
            {props.title && <h2 className="header_subtitle">{props.subtitle} </h2>}
        </div>
    </div>
)
Header.defaultProps = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hand of a computer.'
}

export default Header;