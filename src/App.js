import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'


class App extends Component {

  render() {
    return (
      <div>
        <Counter maxValue={5} />
        <Counter maxValue={3}/>
      </div>
    );
  }
}

export default App;
