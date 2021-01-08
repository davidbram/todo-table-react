import React from "react";
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <h3>To Do Table</h3>

      <ul className="nav-links">
        <Link to='/'><li>Home</li></Link>
        <Link to='/add'><li>Add Item</li></Link>
      </ul>
    </nav>
  );
};

export default NavBar;
