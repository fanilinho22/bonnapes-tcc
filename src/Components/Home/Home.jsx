import React from 'react';
import "./home.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import laptop from './img/laptop.png'
import taco from './img/taco.gif'
import dinheiro from './img/dinheiro.gif'
import casa from './img/casa.gif';
import terra from './img/terra.gif'
import felipe from './img/felipe.png'
import saori from './img/saori.png'
import daniel from './img/daniel.png'
import kauã from './img/kauã.png'
function Home() {

    return (
        <div className='homes'>
            <Header />

            <div className='inicio'>

                <div className='apresenta'>
                    <h1 className='titulo-home'>Quem Somos?</h1>

                    <p id='nós'>A Bonnape tem a missão de criar um sistema para auxiliar todas as pessoas que enfrentam
                        desafios com suas rotinas alimentares devido à falta de tempo e recursos. Nosso objetivo é utilizar
                        os ingredientes disponíveis em casa para fornecer uma variedade de ideias de receitas, além de
                        oferecer suporte para alcançar objetivos relacionados ao corpo, como ganho de massa ou perda de peso.
                        Estamos comprometidos em tornar a alimentação saudável acessível e prática para todos.</p>
                </div>

                <div className='apresentaImagem'>
                    <img src={laptop} alt="laptop" />
                </div>
            </div>

            <div className='abaixos'>
                <div className='cad'>
                    <div className='pequenos-cards'>
                        <img src={casa} alt="casa" id='gif' />
                        <h1 id='empresa'>Empresa</h1>

                        <p id='textinho'>Somos novos no mercado nutricional e estamos em desenvolvimento e melhoria do projeto desde 2023</p>
                    </div>
                    <div className='pequenos-cards'>
                        <img src={terra} alt="terra" id='gif' />

                        <h1>Impacto social</h1>
                        <p id='textinho'>Temos como meta ajudar pessoas a ingressarem em uma rotina alimentar, sendo os jovens com pouco conhecimento na área o nosso foco</p>
                    </div>
                    <div className='pequenos-cards'>
                        <img src={taco} alt="taco" id='gif' />
                        <br /> <br />
                        <h1>Comida</h1>
                        <p id='textinho'>Não é preciso ter muito para fazer boa comida. Vamos ajudar você a criar as melhores receitas com os alimentos ao seu alcance</p>
                    </div>
                    <div className='pequenos-cards'>
                        <img src={dinheiro} alt="dinheiro" id='gif' />
                        <br /> <br />
                        <h1>Renda</h1>
                        <p id='textinho'> Estamos atualmente desenvolvendo nosso projeto de forma gratuita, mas nossa visão inclui a implementação de planos para aprimorar ainda mais a sua nutrição.</p>
                    </div>
                </div>
            </div>

            <div className='final'>
                <div className='conteiner'>

                    <h1 className='titulo-equipe'>A equipe e o projeto</h1>

                </div>

                <div className='equipe-conteudo'>

                    <div className='pessoas'>
                        <div className='cima'>
                            <div className='cadaum'>
                                <h3 id='nomes'>felipe</h3>
                                <img src={felipe} alt="felipe" className='pessoas-card' />
                                <p>Desing & front-dev</p>

                            </div>
                            <div className='cadaum'>
                                <h3 id='nomes'>daniel</h3>
                                <img src={daniel} alt="daniel" className='pessoas-card' />
                                <p>Front-dev & back-dev</p>
                            </div>
                        </div>
                        <div className='baixo'>
                            <div className='cadaum'>
                                <h3 id='nomes'>saori</h3>
                                <img src={saori} alt="saori" className='pessoas-card' />
                                <p>Desing & front-dev</p>
                            </div>
                            <div className='cadaum'>
                                <h3 id='nomes'>kauã</h3>
                                <img src={kauã} alt="kauã" className='pessoas-card' />
                                <p>Documentação e criativo</p>
                            </div>
                        </div>
                    </div>

                    <div className='texto-projeto'>
                        <h1>O projeto</h1>
                        <p>
                            Nosso projeto é concebido como um sistema nutricional completo. Basta inserir um ingrediente que você tenha em casa, e o sistema gerará uma lista de todas as receitas possíveis com esse alimento. Queremos trazer criatividade para sua alimentação e acabar com a monotonia das receitas que podem se tornar enjoativas na sua rotina!
                        </p>
                    </div>
                </div>

                <div className='frase-efeito'>
                    <h1>Delícias culinárias ao seu alcance: Bonnape, o seu guia de receitas irresistíveis!</h1>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Home
