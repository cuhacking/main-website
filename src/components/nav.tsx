import React from 'react';
import { Link } from 'react-router-dom'; 
import './nav.css';

function Nav() {
  return (
    <nav className="navbar-container">
      <Link to="/"> <h3> cuHacking Logo </h3> </Link>
      <ul className="navbar-links">
        <Link to="/"> <li> Home </li> </Link>
        <Link to="/Events"> <li> Events</li> </Link>
        <Link to="/Blog"> <li> Blog</li> </Link>
      </ul>
    </nav>
  );
}

export default Nav;
