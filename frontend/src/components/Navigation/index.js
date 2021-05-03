import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLoaded }){


  return (
    <div>
      <NavLink exact to="/" className="home"><img src="../../../images/TruMedia.png" alt="TruMedia" /></NavLink>
      {isLoaded}
    </div>

  );
}

export default Navigation;
