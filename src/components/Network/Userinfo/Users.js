import React from 'react';
import networkcss from '../Network.module.css';
import {NavLink} from 'react-router-dom';

let Users = (props) => {
  return (
    <div className={networkcss.user}><NavLink to={'/network/' + props.id}>{props.username}</NavLink>  </div>
  )
}

export default Users;
