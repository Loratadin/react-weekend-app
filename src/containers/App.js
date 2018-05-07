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
    let btnClass = ' ';

    if (this.state.showMonths) {
months = (
  <div>
    <Dates />
  </div> 
);
    btnClass = classes.Red;

    }

    const assignedClasses = [];
    if (this.state.months.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (this.state.months.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }
    return (
      <div className={classes.App}>
        <header className={classes.Appheader}>
          <img src="../lime.png" className={classes.Applogo} alt="logo" />
          <h1 className={classes.Apptitle}>Weekend React App</h1>
        </header>
        <p className={assignedClasses.join(' ')}>Dreams, vacations plans, and more...</p> 
        <p className={classes.Appintro}>
          Something is coming soon...
        </p>
        <button className={btnClass}
        onClick={this.toggleMonthsHandler}>Show months</button>
        {months}
      </div>
    );
  }
}

export default App;
