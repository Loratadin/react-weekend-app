import React, { Component } from 'react';
import './App.css';
import Day from './Day/Day';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="../lime.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Weekend React App</h1>
        </header>
        <p className="App-intro">
          Something is coming soon...
        </p>
        <button>Switch month</button>
        <Day month="May" day="17"/>
        <Day month="June" day="1">Wedding anniversary congratulations</Day>
        <Day month="July" day="4"/>
      </div>
    );
  }
}

export default App;
