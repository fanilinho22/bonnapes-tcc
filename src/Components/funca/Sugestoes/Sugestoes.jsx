import './sugestoes.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function App() {

  const navigate = useNavigate();
  const handleVoltar = () => {
    // Redirecionar para a página "/home"
    navigate('/home');
  };

  return (
    <div className="sugest">
      <Header />
      <button onClick={handleVoltar}></button>
      <div className='sugestoes'>

        <h1 className='titulo-sugest'>Receitas do dia!</h1>

        <div className='bloco'>
          <div className='receitas-dia'>
            <h1>Café da Manhã</h1>
            <h2>Smoothie de Frutas Tropicais - Fácil</h2>
            <p className='titulo-pequeno'><strong>Ingredientes:</strong></p>
            <p>
              1 banana madura;
              1 xícara de abacaxi picado;
              1/2 xícara de manga picada;
              1/2 xícara de iogurte natural;
              1/2 xícara de suco de laranja;
              Gelo a gosto;</p>

            <p className='titulo-pequeno'><strong>Modo de Preparo:</strong></p>

            <p>
              Coloque todos os ingredientes no liquidificador.
              Misture até obter uma consistência suave.
              Adicione gelo a gosto e misture novamente.
              Despeje em um copo e aproveite!</p>
          </div>

          <div className='receitas-dia'>
            <h1>Almoço</h1>
            <h2>Frango Grelhado com Salada de Quinoa - Moderada</h2>
            <p className='titulo-pequeno'><strong>Ingredientes:</strong></p>
            <p>
              Peitos de frango;
              1 xícara de quinoa cozida;
              Tomates cereja cortados ao meio;
              Pepino em cubos;
              Folhas de espinafre;
              Azeite de oliva;
              Suco de limão;
              Sal e pimenta a gosto;</p>

            <p className='titulo-pequeno'><strong>Modo de Preparo:</strong></p>

            <p>
              Tempere os peitos de frango com sal e pimenta, grelhe até que estejam cozidos por completo.
              Em uma tigela, misture a quinoa cozida, tomates cereja, pepino e folhas de espinafre.
              Regue a salada com azeite de oliva e suco de limão, tempere com sal e pimenta a gosto.
              Sirva o frango grelhado sobre a salada de quinoa.</p>
          </div>

          <div className='receitas-dia'>
            <h1>Jantar</h1>
            <h2>Espaguete com Molho de Tomate Caseiro - Fácil</h2>
            <p className='titulo-pequeno'><strong>Ingredientes:</strong></p>
            <p>
              300g de espaguete;
              2 latas de tomate pelado;
              2 dentes de alho picados;
              1 cebola picada;
              Azeite de oliva;
              Manjericão fresco;
              Sal e pimenta a gosto;
              Queijo parmesão ralado (opcional);</p>

            <p className='titulo-pequeno'><strong>Modo de Preparo:</strong></p>

            <p>
              Cozinhe o espaguete de acordo com as instruções da embalagem.
              Em uma panela, refogue o alho e a cebola no azeite de oliva até ficarem dourados.
              Adicione os tomates pelados e deixe cozinhando em fogo baixo por 20-30 minutos.
              Tempere com sal, pimenta e manjericão a gosto.
              Sirva o molho sobre o espaguete cozido e polvilhe com queijo parmesão se desejar.</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
