import './sesim.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ReceitasNaoSalvas = () => {
  return (
    <div className='senao'>
      <h1>Gostaria de ver mais? Que tal dar uma olhada no nosso vasto cardápio de receitas?</h1>
      <Link to="/pesquisar-receitas">Receitas</Link>
    </div>
  );
}

export default ReceitasNaoSalvas;
