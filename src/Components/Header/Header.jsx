import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import Semilogo from './semelogo.png'


function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to="/home">
          <img src={Semilogo} alt='Logo da Bona Semilla' />
        </Link>
      </div>

      <div>
        <div className='header_bar'>
          <Link to="/home">Home</Link>
          <Link to="/sobre">Quem somos</Link>
          <Link to="/usuario">Perfil</Link>
        </div>
      </div>

      <div className="sair">
        <Link to="/">Sair</Link>
      </div>
    </div>
  )
}

export default Header
