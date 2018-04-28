import React, { Component } from 'react';
import './App.css';
import Day from './Day/Day';

class App extends Component {
state = {
  days: [
    { month:'May', day:17 },
    { month:'June', day:1 },
    { month:'July', day:4 }
  ]
}

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
        <Day month={this.state.days[0].month} day={this.state.days[0].day}/>
        <Day month={this.state.days[1].month} day={this.state.days[1].day}>Wedding anniversary congratulations</Day>
        <Day month={this.state.days[2].month} day={this.state.days[2].day}/>
      </div>
    );
  }
}

export default App;
