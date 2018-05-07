import React from 'react';
import Day from './Day/Day';

const dates = (props) => props.months.map((day, index) => {
      return <Day 
      click={() => props.clicked(index)}
      month={day.month} 
      day={day.day}
      key={day.id}
      changed={(event) => props.changed(event, day.id)}/>
    });

export default dates;

