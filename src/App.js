import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  state = { counter:0 }

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
      //---
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      //---
      <div>
        <div>Your count is: {this.state.counter}</div>
        <button type="button" onClick={this.handlePlusClick}>+ Plus +</button>
        <button type="button" onClick={this.handleMinusClick}>- Minus -</button>
      </div>
    );
  }
}

export default App;
