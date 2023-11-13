import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Senao from './senao/Senao'
import Receitas from '../../../DB/receitas.json';

function ReceitasSalvas() {
  const [receitasSalvas, setReceitasSalvas] = useState(() => {
    // Tenta obter as receitas salvas do localStorage ao carregar a página
    const savedRecipes = localStorage.getItem('receitasSalvas');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  // Filtra as receitas salvas com base nos IDs armazenados
  const savedRecipesData = Receitas.filter((receita) =>
    receitasSalvas.includes(receita.id)
  );

  return (
    <div className="ReceitasSalvas">
      <div className='fundinho'>
        <Header />
        <div className='box-pesquisa'>
          <h1 className='titulo'>Receitas Salvas</h1>
        </div>
        <div className="box-receitas">
          {savedRecipesData.map((receita) => (
            <div key={receita.id} className="receita">
              <hr />
              <h1>{receita.titulo}</h1>
              <p>Dificuldade: {receita.dificuldade}</p>
              <div className="bigbox">
                <div className="ingredientes">
                  <h2>Ingredientes:</h2>
                  <ul>
                    {receita.ingredientes.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="preparo">
                  <h2>Modo de Preparo:</h2>
                  <p>{receita.modo_preparo}</p>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>

        <div>
          {savedRecipesData.length === 0 && <Senao />}
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default ReceitasSalvas;
