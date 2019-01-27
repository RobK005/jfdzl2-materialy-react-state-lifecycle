import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

    static defaultProps = {
        maxValue: 10,
        minValue: -10
    }

    static propTypes = {
        maxValue: PropTypes.number //dzieki temu konsola wykrywa blad zwiazany z innym typem zmiennej w App.js
    }

    state = { counter: 0 }

    handlePlusClick = () => {
        if (this.state.counter < this.props.maxValue) {
            this.setState({
                counter: this.state.counter + 1

            })
        }
    }

    handleMinusClick = () => {
        if (this.state.counter > this.props.minValue) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    render() {
        return (
            <div>
                <div>Your count is: {this.state.counter}, max is {this.props.maxValue}:</div>
                <button type="button" onClick={this.handlePlusClick}>+ Plus +</button>
                <button type="button" onClick={this.handleMinusClick}>- Minus -</button>
            </div>
        );
    }
}

export default Counter;