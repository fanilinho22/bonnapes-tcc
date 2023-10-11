import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";




function Header() {
  return (
    <div className='header'>
      <h1>Bonnape</h1>


      <div className='bar-back'>
        <div className='header_bar'>
          <li className='header_bar'><Link to="/">Home</Link></li>
          <li className='header_bar'><Link to="/Publicacoes">Cadastro</Link></li>
          <li className='header_bar'><Link to="/Dicas">Login</Link>
          </li>
        </div>
      </div>


      <div className="header_right">
        <p id='p'></p>
      </div>
    </div>
  )
}

export default Header
