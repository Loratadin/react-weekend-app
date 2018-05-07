import React from 'react';

const cockpit = (props) => {
 const assignedClasses = [];
 if (props.state.months.length <= 2) {
   assignedClasses.push(classes.red); // assignedClasses = ['red']
 }
 if (props.state.months.length <= 1) {
   assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
 }

 return (
  <div>
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
  </div>
  );
};

export default cockpit;