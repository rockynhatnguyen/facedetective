import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <Tilt className="Tilt br2 shadow2" options={{ max : 50 }}>
        <div className="Tilt-inner"><img className='logo-image' src={logo} alt='Logo of a robot head.'/></div>
      </Tilt>
    </div>
  );
}

export default Logo;
