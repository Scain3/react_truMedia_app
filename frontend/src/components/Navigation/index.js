import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLoaded }){


  return (
    <div>
      <NavLink exact to="/" className="home"><img src="http://static1.squarespace.com/static/52818760e4b05f093cd13938/t/5dcd9057742b866dbf2c7248/1619577471587/?format=1500w" /></NavLink>
      {isLoaded}
    </div>

  );
}

export default Navigation;
