import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title/Title'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Title />
      </div>
    );
  }
}

export default App;
