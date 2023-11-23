import './pesquisaReceitas.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Receitas from '../../../DB/receitas.json';

function App() {

  const navigate = useNavigate();
  const handleVoltar = () => {
    // Redirecionar para a página "/home"
    navigate('/home');
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [receitasSalvas, setReceitasSalvas] = useState(() => {
    const savedRecipes = localStorage.getItem('receitasSalvas');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  // Adiciona um estado para controlar a última atualização das receitas salvas
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const filteredReceitas = Receitas.filter((receita) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      receita.ingredientes.some((ingredient) =>
        ingredient.toLowerCase().includes(lowerCaseSearchTerm)
      ) ||
      receita.titulo.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  const toggleSalvarReceita = ({ id, titulo }) => {
    if (receitasSalvas.includes(id)) {
      setReceitasSalvas(receitasSalvas.filter((savedId) => savedId !== id));
      alert(`Você removeu a receita "${titulo}" dos favoritos.`);
    } else {
      setReceitasSalvas([...receitasSalvas, id]);
      alert(`Você salvou a receita "${titulo}" nos favoritos.`);
    }
  };

  // Atualiza o localStorage sempre que receitasSalvas mudar
  useEffect(() => {
    localStorage.setItem('receitasSalvas', JSON.stringify(receitasSalvas));
    // Atualiza o timestamp para forçar o re-render da página pesquisaReceitas.jsx
    setLastUpdate(Date.now());
  }, [receitasSalvas]);



  return (
    <div className="pesquisarec">
      <Header />
      <div className='fundinho'>
        <div className='somenteparaamerdadobotao'>
          <button onClick={handleVoltar}></button>
        </div>

        <div className='box-pesquisa'>
          <h1 className='titulo'>Pesquisar receitas</h1>
          <input className='input-pesqusia'
            type="text"
            placeholder="Pesquisar por ingredientes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>


        <div className='box-receitas'>
          {filteredReceitas.map((receita) => (
            <div key={receita.id} className='receita'>
              <hr />
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
              <button className='butao-salvar' onClick={() => toggleSalvarReceita({ id: receita.id, titulo: receita.titulo })}>
                {receitasSalvas.includes(receita.id) ? 'Remover dos Favoritos' : 'Salvar nos Favoritos'}
              </button>
              <hr />
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
