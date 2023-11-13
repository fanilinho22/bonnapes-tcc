import './senao.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ReceitasNaoSalvas = () => {
  return (
    <div className='senao'>
      <h1>Caso não tenha nenhuma receita salva, que tal dar uma olhada no nosso vasto cardápio de receitas?</h1>
      <Link to="/pesquisar-receitas">Ir para Pesquisar Receitas</Link>
    </div>
  );
}

export default ReceitasNaoSalvas;
