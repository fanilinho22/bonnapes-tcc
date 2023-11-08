import './pesquisaReceitas.css';
import React, { useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Receitas from '../../../DB/receitas.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredReceitas = Receitas.filter((receita) => {
    return receita.ingredientes.some((ingredient) =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="App">
      <div className='fundinho'>

      <Header />
        <h1 className='titulo'>Pesquisar receitas</h1>
        <input className='input-pesqusia'
          type="text"
          placeholder="Pesquisar por ingredientes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className='box-receitas'>
          {filteredReceitas.map((receita) => (
            <div key={receita.id} className='receita'>
              <h1>{receita.titulo}</h1>
              <p>Dificuldade: {receita.dificuldade}</p>
              <div className='bigbox'>
                <div className='ingredientes'>
                  <h2>Ingredientes:</h2>
                  <ul>
                    {receita.ingredientes.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className='preparo'>
                  <h2>Modo de Preparo:</h2>
                  <p>{receita.modo_preparo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
      <Footer />
    </div>
  );
}

export default App;
