import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav>
      <ul>
        <li>
          <Link to="/">Homepaaaaaaaaaage</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
