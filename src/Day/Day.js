import React from 'react';
import './Day.css';
import Radium from 'radium';

const day = (props) => {
 
 const style = {
  backgroundColor: 'rgba(245, 232, 28, 0.76)',
  font: 'inherit',
  borderRadius: '9px',
  padding:'8px',
  textAlign: 'center',
  color: 'inherit',
  '@media (min-width: 1500px)': {
   backgroundColor: '#7a9506'
  }
 };
 
 // then in div style overwrites class 
return (
 <div className="Day" style={style}> 
  <p onClick={props.click}>I'm {props.month} {props.day}, 2018!</p>
  <p>{props.children}</p>
  <input style={style} type="text" onChange={props.changed} value={props.month}/>
 </div>
)
}

export default Radium(day);