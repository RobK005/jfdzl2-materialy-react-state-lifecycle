import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'


class App extends Component {

  render() {
    return (
      <div>
        <Counter maxValue={true} />
        <Counter maxValue={3} />
        <Counter/>
      </div>
    );
  }
}

export default App;
