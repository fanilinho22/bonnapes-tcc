import React from 'react';
import "./home.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import laptop from './img/laptop.png'
import brigadeiro from './img/brigadeiro.png'
import mousse from './img/mousse.png'
import moqueca from './img/moqueca.png'
import corn from './img/corn.png'

function Home() {

    return (

        <div className='Home'>
            <Header />
            <div className='inicio'>
                <div className='apresenta'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus nulla, mollis consectetur lobortis et, consequat ut eros. Vestibulum ac mi nec velit bibendum consequat. Nam nec eleifend mauris, eu sagittis nisi.</p>
                </div>

                <div className='apresentaImagem'>
                    <img src={laptop} alt="laptop" />
                </div>
            </div>

            <div className='abaixo'>
                <div className='cad'>
                    <div className='pequenos-cards'>
                        <img src={brigadeiro} alt="brisadeiro" />
                        <h1>Brigadeiro</h1>
                        <p>Exemplo de como
                            ficaria um pequeno
                            texto. Mais algumas
                            palavras.</p>
                    </div>
                    <div className='pequenos-cards'>
                        <img src={mousse} alt="sobremessa" />
                        <h1>Mousse</h1>
                        <p>Exemplo de como
                            ficaria um pequeno
                            texto. Mais algumas
                            palavras.</p>
                    </div>
                    <div className='pequenos-cards'>
                        <img src={moqueca} alt="peixe" />
                        <h1>Moqueca</h1>
                        <p>Exemplo de como
                            ficaria um pequeno
                            texto. Mais algumas
                            palavras.</p>
                    </div>
                    <div className='pequenos-cards'>
                        <img src={corn} alt="olha o minho kk" />
                        <h1>Milho</h1>
                        <p>Exemplo de como
                            ficaria um pequeno
                            texto. Mais algumas
                            palavras.</p>
                    </div>
                </div>
            </div>

            <div className='equipe'>
                <div className='titulo-equipe'>
                    <h1>A equipe e o projeto</h1>
                </div>
            </div>

            <div className='equipe-conteudo'>
                <div className='pessoas'>
                    <div className='cima'>
                        <div className='pessoas-card'>
                            <h3>felipe</h3>
                            <img src={brigadeiro} alt="brisadeiro" />
                            <p>Desing & front-dev</p>

                        </div>
                        <div className='pessoas-card'>
                            <h3>daniel</h3>
                            <img src={brigadeiro} alt="brisadeiro" />
                            <p>Front-dev & back-dev</p>
                        </div>
                    </div>
                    <div className='baixo'>
                        <div className='pessoas-card'>
                            <h3>sayori</h3>
                            <img src={brigadeiro} alt="brisadeiro" />
                            <p>Desing & front-dev</p>
                        </div>
                        <div className='pessoas-card'>
                            <h3>Deus</h3>
                            <img src={brigadeiro} alt="brisadeiro" />
                            <p>Ajuda mt </p>
                        </div>
                    </div>
                </div>

                <div className='texto-projeto'>
                    <h1>Texto</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus nulla, mollis consectetur lobortis et, consequat ut eros. Vestibulum ac mi nec velit bibendum consequat. Nam nec eleifend mauris, eu sagittis nisi.
                    </p>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Home
