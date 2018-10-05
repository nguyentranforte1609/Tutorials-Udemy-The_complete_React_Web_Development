import React from 'react';
import Option from './Option';

const Options = (props) => (
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

export default Options;