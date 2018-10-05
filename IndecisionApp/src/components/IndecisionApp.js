import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    }
    
    componentDidMount(){
        const json = localStorage.getItem('option')
        const options = JSON.parse(json)
        if (options) {
            this.setState(()=> ({
                options: options
            }))
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('option', json);
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }))
    }

    handleSingleDeleteOption = (option) => {
        this.setState((prev) => ({
            options: prev.options.filter((item) => {
                item !== option
            })
        }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(`Choose option ${option}`)
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prev) => ({
            options: prev.options.concat(option)
        }))
    }

    render() {
        return (
            <div>
                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                />
                <Action
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleSingleDeleteOption={this.handleSingleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}