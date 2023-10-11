import React, { useState } from 'react';
import "./publicacoes.css"
import Header from '../Header/Header';

function Home() {
  // Definir estados para os campos do formulário
  const [lugar, setLugar] = useState('');
  const [dias, setDias] = useState('');
  const [resumo, setResumo] = useState('');
  const [imagem, setImagem] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [formData, setFormData] = useState({});

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode salvar os dados em variáveis ou realizar qualquer ação desejada
    const dadosDaViagem = {
      lugar,
      dias,
      resumo,
      imagemUrl: imagem,
    };

    // Armazene os dados do formulário no estado
    setFormData(dadosDaViagem);

    // Exibir o card
    setShowCard(true);

    // Limpar os campos após o envio (opcional)
    setLugar('');
    setDias('');
    setResumo('');
    setImagem(null);
  };

  return (
    <div className="App">

      <Header />

      <div className='divao'>
        <div class="card-content">
          <form onSubmit={handleSubmit}>
            <div>
              <h3>Post no seu feed</h3>
              <label>
                Lugar:
                <input
                  type="text"
                  name="lugar"
                  value={lugar}
                  onChange={(e) => setLugar(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Dias de estadia:
                <input
                  type="number"
                  name="dias"
                  value={dias}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (inputValue === "" || parseFloat(inputValue) >= 0) {
                      setDias(inputValue);
                    }
                  }}
                  min="0"
                />
              </label>
            </div>
            <div>
              <label>
                Um breve resumo da viagem:
                <textarea
                  name="resumo"
                  value={resumo}
                  onChange={(e) => setResumo(e.target.value)}
                  style={{ height: '100px', width: '350px' }} // Definindo a altura desejada em pixels
                />
              </label>
            </div>
            <div>
              <label className="file-upload-button">

                <span>Clique aqui para adicionar uma foto da viagem</span>
                <input
                  type="file"
                  accept="image/*"
                  acceptLanguage="pt-BR"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      setImagem(imageUrl);
                    }
                  }}
                />
              </label>
            </div>
            {/* <div className='button-container'>
             <button type="submit">Salvar</button>
             <button type="button" onClick={handleSubmit}>Salvar</button>
           </div> */}
            <div className="button-container">
              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </div>
      <div className='publis'>
        {showCard && (
          <div className="card">
            <h2>Dados do Formulário</h2>
            <p>Lugar: {formData.lugar}</p>
            <p>Dias de estadia: {formData.dias}</p>
            <p>Resumo: {formData.resumo}</p>
            {formData.imagemUrl && <img src={formData.imagemUrl} alt="Imagem da viagem" />}
          </div>
        )}
      </div>

    </div >
  );
}

export default Home
