import React from 'react';
import { Link } from 'react-router-dom'; 
import './nav.css';

function Nav() {
  return (
    <nav className="navbar-container">
      <Link to="/"> <h3> cuHacking Logo </h3> </Link>
      <ul className="navbar-links">
        <Link to="/" className="navbar-link"> <li> Home </li> </Link>
        <Link to="/events" className="navbar-link"> <li> Events</li> </Link>
        <Link to="/blog" className="navbar-link"> <li> Blog</li> </Link>
      </ul>
    </nav>
  );
}

export default Nav;
