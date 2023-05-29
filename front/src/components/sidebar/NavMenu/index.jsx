import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

function NavMenu({ navigation }) {
  return (
    <ul className="nav-menu">
      { navigation && navigation.map((link, linkId) => <li key={linkId}>
        <Link to={link.to}>{link.title}</Link>
      </li>) }
    </ul>
  );
}

export default NavMenu; 
