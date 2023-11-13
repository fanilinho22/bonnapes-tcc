import React, { useState } from 'react';
import './baixarReceitas.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [resultIMC, setResultIMC] = useState(null);


  const calcIMC = () => {
    let pushPeso = weight;
    let pushAltura = height;
    pushAltura = pushAltura ** 2;
    let calc = (pushPeso / pushAltura).toFixed(2);

    let resultText = document.getElementById('resultIMC');
    resultText.innerHTML = `<p> Seu IMC: ${calc} Kg/m² </p>`;

    if (calc < 18.5) {
      resultText.innerHTML += `<p> Classificação: Abaixo do Peso</p>`;
    } else if (calc < 24.9) {
      resultText.innerHTML += `<p> Classificação: Normal</p>`;
    } else if (calc < 29.9) {
      resultText.innerHTML += `<p> Classificação: Sobrepeso</p>`;
    } else if (calc < 34.9) {
      resultText.innerHTML += `<p> Classificação: Obesidade I</p>`;
    } else if (calc < 39.9) {
      resultText.innerHTML += `<p> Classificação: Obesidade II</p>`;
    } else if (calc >= 40) {
      resultText.innerHTML += `<p> Classificação: Obesidade III ou Mórbida</p>`;
    }

    if (!pushPeso || !pushAltura) {
      resultText.innerHTML = `<p> Por favor, digite o Peso e a Altura</p>`;
    }
  };

  const [idade, setIdade] = useState('crianca1');
  const [sexo, setSexo] = useState('M');
  const [pesoTMB, setPesoTMB] = useState('');
  const [resultTMB, setResultTMB] = useState(null);
  const [nivelAtividade, setNivelAtividade] = useState('');
  const [resultTDEE, setResultTDEE] = useState(null);

  const calcTMB = () => {
    let resultText = document.getElementById('resultTMB');

    if (!pesoTMB || !idade || !sexo || !nivelAtividade) {
      setResultTMB('Por favor, preencha todos os campos corretamente.');
      return;
    }

    let calcTMB;

    if (sexo === 'M' && idade === 'crianca1') {
      calcTMB = ((60.9 * pesoTMB) - 54).toFixed(2);
    } else if (sexo === 'M' && idade === 'crianca2') {
      calcTMB = ((22.7 * pesoTMB) + 495).toFixed(2);
    } else if (sexo === 'M' && idade === 'adolescente') {
      calcTMB = ((17.5 * pesoTMB) + 651).toFixed(2);
    } else if (sexo === 'M' && idade === 'adulto1') {
      calcTMB = ((15.3 * pesoTMB) + 679).toFixed(2);
    } else if (sexo === 'M' && idade === 'adulto2') {
      calcTMB = ((11.6 * pesoTMB) + 879).toFixed(2);
    } else if (sexo === 'M' && idade === 'idoso') {
      calcTMB = ((13.5 * pesoTMB) + 487).toFixed(2);
    } else if (sexo === 'F' && idade === 'crianca1') {
      calcTMB = ((61 * pesoTMB) - 51).toFixed(2);
    } else if (sexo === 'F' && idade === 'crianca2') {
      calcTMB = ((22.5 * pesoTMB) + 499).toFixed(2);
    } else if (sexo === 'F' && idade === 'adolescente') {
      calcTMB = ((12.2 * pesoTMB) + 746).toFixed(2);
    } else if (sexo === 'F' && idade === 'adulto1') {
      calcTMB = ((14.7 * pesoTMB) + 496).toFixed(2);
    } else if (sexo === 'F' && idade === 'adulto2') {
      calcTMB = ((8.7 * pesoTMB) + 829).toFixed(2);
    } else if (sexo === 'F' && idade === 'idoso') {
      calcTMB = ((10.5 * pesoTMB) + 596).toFixed(2);
    } else {
      setResultTMB('Por favor, preencha todos os campos corretamente.');
      return;
    }

    let tmbComNivelAtividade = calcTMB * nivelAtividade;
    let tdee = tmbComNivelAtividade.toFixed(2);

    setResultTMB(<p dangerouslySetInnerHTML={{ __html: `Sua TMB: <strong>${calcTMB} Kcal/dia</strong>` }} />);
    setResultTDEE(<p dangerouslySetInnerHTML={{ __html: `Seu TDEE: <strong>${tdee} Kcal/dia</strong>` }} />);

  };



  const [pesoH2O, setPesoH2O] = useState('');
  const [resultH2O, setResultH2O] = useState(null);

  const calcH2O = () => {
    let resultText = document.getElementById('resultH2O');

    if (pesoH2O) {
      let calc = parseFloat((pesoH2O * 35) / 1000).toFixed(1);

      if (calc < 2) {
        setResultH2O(`Consumir: 2 Litros/dia (Consumo Mínimo)`);
      } else {
        setResultH2O(`Consumir: ${calc} Litros/dia`);
      }
    } else {
      setResultH2O('Por favor, digite o peso para calcular a ingestão hídrica.');
    }
  };


  return (
    <div className="App">
      <Header />
      <div className='page-calc'>
        <h1 className='titulo-calc'>Calculadoras Nutricionais</h1>

        <div className='imc'>
          <div className="containerText">
            <h1>O que é IMC?</h1>
            <p>
              O Índice de Massa Corporal (IMC) é um cálculo simples, fácil e rápido
              adotado pela Organização Mundial da Saúde (OMS) como referência
              internacional de obesidade. Seu resultado tem o objetivo de mostrar a{' '}
              <strong>avaliação do nível de gordura corporal</strong> de cada pessoa.
            </p>
            <p>
              <strong>Atenção: </strong>O resultado <strong>não é exato</strong>,
              ele serve como parâmetro de avaliação rápida, pois uma pessoa com alto
              percentual de massa magra pode apresentar "sobrepeso", e fisicamente
              ela está saudável. Portanto, para uma avaliação exata é necessário um
              exame físico.
            </p>
          </div>

          <div className="containerCalc">
            <h2>Calcule seu IMC</h2>
            <h3>Peso</h3>
            <input
              type="number"
              id="peso"
              step="0.01"
              placeholder="Peso em Kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            <h3>Altura</h3>
            <input
              type="number"
              id="altura"
              step="0.01"
              placeholder="Altura em Metros"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <button onClick={calcIMC}>Calcular</button>

            <div id="resultIMC" className="resultCalcs">
              {resultIMC && <p>{resultIMC}</p>}
            </div>
          </div>
        </div>

        <div className='tmb'>

          <div className="containerText">
            <h1>O que é TMB e TDEE?</h1>
            <p>
              A Taxa Metabólica Basal (TMB) é o{' '}
              <strong>mínimo de calorias necessárias para manter as funções do organismo em repouso</strong>,
              como os batimentos cardíacos, a pressão arterial, a respiração e a manutenção da temperatura corporal.
            </p>
            <p>Já a TDEE (Gasto Energético Total Diário) representa todas as calorias que você queima em um dia, incluindo a TMB e as calorias gastas em atividades físicas.
              Calcular a TDEE é útil para ajustar a ingestão de calorias conforme seus objetivos de peso.</p>
          </div>

          <div className="containerCalc">
            <h2>Calcule sua TMB</h2>
            <h4>Referência utilizada para o Cálculo: FAO,1985</h4>
            <h3>Faixa Etária</h3>
            <select id="idade" value={idade} onChange={(e) => setIdade(e.target.value)}>
              <option value="crianca1">0 - 3 Anos</option>
              <option value="crianca2">3 - 10 Anos</option>
              <option value="adolescente">10 - 18 Anos</option>
              <option value="adulto1">18 - 30 Anos</option>
              <option value="adulto2">30 - 60 Anos</option>
              <option value="idoso">&gt; 60 Anos</option>
            </select>

            <h3>Sexo</h3>
            <select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
            </select>

            <h3>Peso</h3>
            <input
              type="number"
              id="pesoTMB"
              step="0.01"
              placeholder="Peso em Kg"
              value={pesoTMB}
              onChange={(e) => setPesoTMB(e.target.value)}
            />

            <h3>Nível de Atividade</h3>
            <select id="nivelAtividade" value={nivelAtividade} onChange={(e) => setNivelAtividade(e.target.value)}>
              <option value="1.2">Sedentário</option>
              <option value="1.375">Levemente Ativo</option>
              <option value="1.55">Moderadamente Ativo</option>
              <option value="1.725">Muito Ativo</option>
              <option value="1.9">Extremamente Ativo</option>
            </select>

            <button onClick={calcTMB}>Calcular</button>

            <div className='result-complex'>
              <div id="resultTMB" className="resultCalcs">
                {resultTMB && <p>{resultTMB}</p>}
              </div>
              <div id="resultTDEE" className="resultCalcs">
                {resultTDEE && <p>{resultTDEE}</p>}
              </div>
            </div>
          </div>
        </div>


        <div className='h2o'>
          <div className="containerText">
            <h1>Ingestão Hídrica?</h1>
            <p>
              Sabemos que o corpo humano é composto por cerca de 70% de água, portanto, a ingestão correta da quantidade de água
              que o nosso corpo necessita é de extrema importância, pois ela traz benefícios à saúde, auxiliando o corpo a filtrar
              as sujidades, regular processos bioquímicos e outros relacionados com a temperatura, transportando ainda substâncias.
            </p>
            <br />
            <p>
              <strong>Lembre-se:</strong> Tudo em excesso é prejudicial, e consumir mais água do que o indicado pode ter efeitos
              negativos à saúde, principalmente para quem tem doenças cardíacas ou renais, pois o organismo não consegue eliminar
              o excesso de água, podendo provocar inchaço no corpo todo, dificuldade para respirar, aumento da pressão arterial,
              desequilíbrio dos minerais na corrente sanguínea e sobrecarga dos rins.
            </p>
          </div>

          <div className="containerCalc">
            <h2>Calcule sua Ingestão Hídrica</h2>
            <h4>Referência utilizada para o Cálculo: 35ml/Kg</h4>

            <h3>Peso</h3>
            <input
              type="number"
              id="pesoH2O"
              step="0.01"
              placeholder="Peso em Kg"
              value={pesoH2O}
              onChange={(e) => setPesoH2O(e.target.value)}
            />
            <button onClick={calcH2O}>Calcular</button>

            <div id="resultH2O" className="resultCalcs">
              {resultH2O && <p>{resultH2O}</p>}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div >
  );
}


export default App;
