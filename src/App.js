import React, { Component } from 'react';
import classes from './App.css';
import Day from './Day/Day';

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

  const dayIndex = this.state.days.findIndex(p => {
    return p.id === id;
  });

  const day = {
    ...this.state.days[dayIndex]
  };

  day.name = event.target.value;

  const days = [...this.state.days];
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
    const style = {
      color: '#fff',
  backgroundColor: 'rgba(245, 232, 28, 0.76)',
  padding: '7px',
  fontSize: '22px',
  fontFamily: 'Gaegu',
  borderRadius: '10px',
  marginBottom: '20px',
  cursor: 'pointer',
  outline: '0'
  }

    let months = null;

    if (this.state.showMonths) {
months = (
  <div>
    {this.state.months.map((day, index) => {
      return <Day 
      click={() => this.deleteDayHandler(index)}
      month={day.month} 
      day={day.day}
      key={day.id}
      changed={(event) => this.monthChangedHandler(event, day.id)}/>
    })}
  </div> 
);

style.backgroundColor = '#f5ba1c';

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
        <button 
        style = {style}
        onClick={this.toggleMonthsHandler}>Show months</button>
        {months}
      </div>
    );
  }
}

export default App;
