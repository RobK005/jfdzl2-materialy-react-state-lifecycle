import React, { Component } from 'react';

class Counter extends Component {

    state = { counter: 0 }

    handlePlusClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleMinusClick = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <div>Your count is: {this.state.counter}</div>
                <button type="button" onClick={this.handlePlusClick}>+ Plus +</button>
                <button type="button" onClick={this.handleMinusClick}>- Minus -</button>
            </div>
        );
    }
}

export default Counter;