import React from 'react';
import "./user.css"
import Header from '../Header/Header';
import logo from './coca.jpg';

function Home() {

    return (

        <div className='Home'>
            <Header />
            <header className="App-header">
                <div className='useres'>
                    <div className='imager'>
                        <img src={logo} className="App-usuario" alt="usuario" />
                    </div>
                    <div className='info'>
                        <p className='usuario'>
                            <b><a>Usuário </a></b>Vitor Pires
                        </p>
                        <a className='interesse'>
                            <b>Locais de Interesses</b>
                        </a>

                        <div className='perguntaBox'>
                            Alabama
                            <div className='botaoBox'>
                                <input type='checkbox' id='topping' name='topping' value='panner' />Visitar
                            </div>

                            New York
                            <div className='botaoBox'>
                                <input type='checkbox' id='topping' name='topping' value='panner' />Visitar
                            </div>

                            Bielo Russia
                            <div className='botaoBox'>
                                <input type='checkbox' id='topping' name='topping' value='panner' />Visitar
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home
