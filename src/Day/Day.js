import React from 'react';
import classes from './Day.css';


const day = (props) => {
 
 const style = {
  backgroundColor: 'rgba(245, 232, 28, 0.76)',
  font: 'inherit',
  borderRadius: '9px',
  padding:'8px',
  textAlign: 'center',
  color: 'inherit'
 };
 
return (
 <div className={classes.Day}> 
  <p onClick={props.click}>I'm {props.month} {props.day}, 2018!</p>
  <p>{props.children}</p>
  <input style={style} type="text" onChange={props.changed} value={props.month}/>
 </div>
)
};

export default day;