import React, { Component } from 'react';
import './App.css';
import Day from './Day/Day';

class App extends Component {
state = {
  months: [
    { month:'May', day:17 },
    { month:'June', day:1 },
    { month:'July', day:4 }
  ],
  otherState: 'some other value',
  showDays: false
}


monthChangedHandler = (event) => {

  this.setState({
    months: [
      { month:'May', day:17 },
      { month: event.target.value, day:1 },
      { month:'July', day:30 }
    ]
  })
}

deleteDayHandler = (dayIndex) => {
 const days = [...this.state.days];
 days.splice(dayIndex, 1);
 this.setState({days: days});
}

toggleMonthsHandler = () => {
 const doesShow = this.state.showMonths;
 this.setState({ showMonths: !doesShow}); // to adjust the state
}
  render() {

    let months = null;

    if (this.state.showMonths) {
months = (
  <div>
    {this.state.months.map((day, index) => {
      return <Day 
      click={() => this.deleteDayHandler(index)}
      month={day.month} 
      day={day.day}/>
    })}
  </div> 
);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src="../lime.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Weekend React App</h1>
        </header>
        <p className="App-intro">
          Something is coming soon...
        </p>
        <button onClick={this.toggleMonthsHandler}>Show months</button>
        {months}
      </div>
    );
  }
}

export default App;
