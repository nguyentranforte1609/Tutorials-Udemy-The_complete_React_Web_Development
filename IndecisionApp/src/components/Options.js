import React from 'react';

const Options = (props) => {
    return (
        <div>
            <button
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
            <ul>
                {
                    props.options.map(option => {
                        return <Option
                            optionText={option}
                            key={option}
                            handleSingleDeleteOption={props.handleSingleDeleteOption}
                        />
                    })
                }
            </ul>
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleSingleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    )
}

export default Options;