import React from 'react';
import networkcss from '../Network.module.css';


let Messages = (props) => {
  return (
    <div className={networkcss.message}> {props.text} </div>
  )
}


export default Messages;
