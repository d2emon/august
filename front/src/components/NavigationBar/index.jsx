import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar({ title, links }) {
  return (
    <div className="navigation-bar">
      <h2 v-if="title">{ title }</h2>
      { links && (
        <ul
          className="navigation"
        >
          {links.map((link) => (
            <li
              key={link.id}
            >
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  );
}

export default NavigationBar; 
