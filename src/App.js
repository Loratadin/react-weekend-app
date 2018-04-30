import React, { Component } from 'react';
import './App.css';
import Day from './Day/Day';

class App extends Component {
state = {
  days: [
    { month:'May', day:17 },
    { month:'June', day:1 },
    { month:'July', day:4 }
  ],
  otherState: 'some other value',
  showMonths: false
}

switchMonthHandler = (newMonth) => {

  this.setState({
    days: [
      { month: newMonth, day:17 },
      { month:'June', day:1 },
      { month:'July', day:30 }
    ]
  })
}

monthChangedHandler = (event) => {

  this.setState({
    days: [
      { month:'May', day:17 },
      { month: event.target.value, day:1 },
      { month:'July', day:30 }
    ]
  })
}

toggleMonthsHandler = () => {
 const doesShow = this.state.showMonths;
 this.setState({ showMonths: !doesShow}); // to adjust the state
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
        <button onClick={this.toggleMonthsHandler}>Switch month</button>
      {
          this.state.showMonths ? // check the condition true or false. If true returns div if false null
        <div>
        <Day 
          month={this.state.days[0].month} 
          day={this.state.days[0].day}/>
        <Day 
          month={this.state.days[1].month} 
          day={this.state.days[1].day}
          click={this.switchMonthHandler.bind(this, 'Jan!')}
          changed={this.monthChangedHandler}>Wedding anniversary congratulations</Day>
        <Day 
          month={this.state.days[2].month} 
          day={this.state.days[2].day}/>
        </div> : null
      }
      </div>
    );
  }
}

export default App;
