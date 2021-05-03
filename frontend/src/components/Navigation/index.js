import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLoaded }){


  return (
    <div>
      <NavLink exact to="/athletes" className="home">TruMedia Networks</NavLink>
      {isLoaded}
    </div>

  );
}

export default Navigation;
