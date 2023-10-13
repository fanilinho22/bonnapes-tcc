import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";




function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <h1>Bonnape</h1>
      </div>



      <div>
        <div className='header_bar'>
          <ul className="nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/sobre">Quem somos</Link></li>
          </ul>
        </div>
      </div>

      <div className="log">
        <ul className="nav">
          <li><Link to="/">Sair</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
