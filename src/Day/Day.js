import React from 'react';

const day = (props) => {
return (
 <div>
  <p onClick={props.click}>I'm {props.month} {props.day}, 2018!</p>
  <p>{props.children}</p>
  <input type="text" onChange={props.changed} value={props.month}/>
 </div>
)
}

export default day;