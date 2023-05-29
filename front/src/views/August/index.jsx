import React from 'react';
import { Outlet } from 'react-router-dom';
import NavSidebar from '../../components/sidebar/NavSidebar';
import Main from '../Main';
import './August.css';

function August() {
  return (
    <Main>
      <div id="app" className="border">
        <div id="bg"></div>
        <div className="page">
          <NavSidebar />  

          <div className="body">
            <Outlet />
          </div>
        </div>
      </div>
    </Main>
  );
}

export default August; 
