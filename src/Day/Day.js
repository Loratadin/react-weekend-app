import React from 'react';

const day = (props) => {
return (
 <div>
  <p>I'm {props.name} {props.number}, 2018!</p>
  <p>{props.children}</p>
 </div>
)
}

export default day;