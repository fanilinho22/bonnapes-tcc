import React from 'react';
import { Link } from 'react-router-dom';
import "./mainPage.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Baner1 from './img/baner1.png';



function Page() {

    return (

        <div className='mainPage'>
            <Header />
            <div className='selection'>
                <div className='nav-bar'>
                    <div className='nav-bar-box'>
                        <a><Link to="/Pesquisar-receitas">Pesquisar receitas</Link></a>
                    </div>
                    <div className='nav-bar-box'>
                        <a><Link to="/Receitas-salvas">Receitas salvas</Link></a>
                    </div>
                    <div className='nav-bar-box'>
                        <a><Link to="/conversor-de-medida">Conversor de medidas</Link></a>
                    </div>
                    <div className='nav-bar-box'>
                        <a><Link to="/Sugestoes">Sugestão</Link></a>
                    </div>
                    <div className='nav-bar-box'>
                        <a><Link to="/calculadora-nutricional">Calculadora nutricional</Link></a>
                    </div>
                </div>

                <div>
                    <img className='imagem' src={Baner1} alt="Banner" />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Page;
