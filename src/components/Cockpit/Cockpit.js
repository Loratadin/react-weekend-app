import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
 const assignedClasses = [];
 let btnClass = '';
 if (props.showMonths) {
  btnClass = classes.Red;
 }
 if (props.months.length <= 2) {
   assignedClasses.push(classes.orange); // assignedClasses = ['orange']
 }
 if (props.months.length <= 1) {
   assignedClasses.push(classes.bold); // assignedClasses = ['orange', 'bold']
 }

 return (
  <div className={classes.cockpit}>
  <header className={classes.Appheader}>
  <img src="../lime.png" className={classes.Applogo} alt="logo" />
  <h1 className={classes.Apptitle}>Weekend React App</h1>
  </header>
  <p className={assignedClasses.join(' ')}>Dreams, vacations plans, and more...</p> 
  <p className={classes.Appintro}>
  Something is coming soon...
  </p>
  <button 
  className={btnClass}
  onClick={props.clicked}>Show months</button>
  </div>
  );
};

export default cockpit;