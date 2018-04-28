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
        <Day name="May" number="17"/>
        <Day name="June" number="1">Wedding anniversary congratulations</Day>
        <Day name="July"number="4"/>
      </div>
    );
  }
}

export default App;
