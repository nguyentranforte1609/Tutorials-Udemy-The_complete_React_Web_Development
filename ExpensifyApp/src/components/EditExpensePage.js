import React from 'react';

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            <p>This is from my EDIT component</p>
            <p>Editing the expense with id of {props.match.params.id}</p>
        </div>
    )
}

export default EditExpensePage;