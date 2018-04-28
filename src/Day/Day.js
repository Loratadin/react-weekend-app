import React from 'react';

const day = (props) => {
return (
 <div>
  <p onClick={props.click}>I'm {props.month} {props.day}, 2018!</p>
  <p>{props.children}</p>
 </div>
)
}

export default day;