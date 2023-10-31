import React, { useState } from 'react';
import './baixarReceitas.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function App() {
  const [genero, setGenero] = useState('');
  const [peso, setPeso] = useState('');
  const [idade, setIdade] = useState('');
  const [altura, setAltura] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [nivelAtividade, setNivelAtividade] = useState('');
  const [caloriasEmagrecer, setCaloriasEmagrecer] = useState('');
  const [taxaMetabolicaBasal, setTaxaMetabolicaBasal] = useState('');
  const [tdee, setTDEE] = useState('');
  const [imc, setIMC] = useState('');

  const calcularNutricao = () => {
    // Realize seus cálculos nutricionais aqui com base nos valores inseridos.
    // Atualize os estados (setCaloriasEmagrecer, setTaxaMetabolicaBasal, setTDEE, setIMC)
    // com os resultados dos cálculos.

    // Exemplo simples: apenas definir valores de teste
    setCaloriasEmagrecer(2000);
    setTaxaMetabolicaBasal(1500);
    setTDEE(2500);
    setIMC(24);
  };

  return (
    <div className="App">
      <Header />
      <h1>Calculadoras nutricionais</h1>

      <div className='cadg'>
        <div className='caixa'>
          <div className='entradas'>
            <div className='entradinhas'>
              <div>
                <h1>Gênero</h1>
                <input className='input' type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
              </div>
              <div>
                <h1>Idade</h1>
                <input className='input' type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />
              </div>
              <div>
                <h1>Objetivo</h1>
                <input className='input' type="text" value={objetivo} onChange={(e) => setObjetivo(e.target.value)} />
              </div>

            </div>
            <div className='entradinhas'>
              <div>
                <h1>Altura em Cm</h1>
                <input className='input' type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />
              </div>
              <div>
                <h1>Peso em Kg</h1>
                <input className='input' type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
              </div>
              <div>
                <h1>Nível de atividade física</h1>
                <input className='input' type="text" value={nivelAtividade} onChange={(e) => setNivelAtividade(e.target.value)} />
              </div>

            </div>

            <button className='butao' onClick={calcularNutricao}>Calcular</button>

          </div>
        </div>

        <div className='resposta'>
          <div className='respostinha'>
            <h1>Você precisa de</h1>
            <p className='resultCalculo'>{caloriasEmagrecer} </p>
            <h1>calorias para emagrecer!</h1>
          </div>

          <div className='respostinha2'>
            <div className='divinha'>
              <h3>Taxa metabólica basal</h3>
              <p className='resultCalculo'>{taxaMetabolicaBasal}</p>
            </div>

            <div className='divinha'>
              <h3>TDEE</h3>
              <p className='resultCalculo'>{tdee}</p>
            </div>

            <div className='divinha'>
              <h3>IMC</h3>
              <p className='resultCalculo'>{imc}</p>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
