import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(){


  return (
    <ul>
      <li>
        <NavLink exact to="/">TruMedia Networks</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
