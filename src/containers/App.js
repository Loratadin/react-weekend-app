import React, { Component } from 'react';
import classes from './App.css';
import Dates from '../components/Dates/Dates';

class App extends Component {
state = {
  months: [
    { id: 'ghjr', month:'May', day:17 },
    { id: 'lkhr', month:'June', day:1 },
    { id: 'svnw', month:'July', day:4 }
  ],
  otherState: 'some other value',
  showDays: false
}


monthChangedHandler = (event, id) => {

  const dayIndex = this.state.months.findIndex(p => {
    return p.id === id;
  });

  const day = {
    ...this.state.months[dayIndex]
  };

  day.name = event.target.value;

  const days = [...this.state.months];
  days[dayIndex] = day;

  this.setState({days: days})
}

deleteDayHandler = (dayIndex) => {
 const days = [...this.state.months];
 days.splice(dayIndex, 1);
 this.setState({months: days});
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
    <Dates 
    months={this.state.months}
    clicked={this.deleteDayHandler}
    changed={this.monthChangedHandler}/>
  </div> 
);

    }

    return (
      <div className={classes.App}>
        {months}
      </div>
    );
  }
}

export default App;
