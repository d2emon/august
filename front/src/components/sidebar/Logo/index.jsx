import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import LogoImage from './logo.png';

function Logo({ title }) {
  return (
    <Link to="/index" id="logo">
      <span>{ title }</span>
      <img src={LogoImage} alt="logo" />
    </Link>
  );
}

export default Logo; 
