class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleSingleDeleteOption = this.handleSingleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
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

    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }))
    }

    handleSingleDeleteOption(option) {
        this.setState((prev) => ({
            options: prev.options.filter((item) => {
                item !== option
            })
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(`Choose option ${option}`)
    }

    handleAddOption(option) {
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

IndecisionApp.defaultProps = {
    options: []
}

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


const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOption}
            >
                What should I do?
            </button>
        </div>
    )
}

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

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({
            error
        }))

        if (!error){
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} >
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))