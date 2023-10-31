import React from 'react';
import { Link } from 'react-router-dom';
import "./mainPage.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



function Page() {

    return (

        <div className='mainPage'>
            <Header />
            
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
                    <a><Link to="/baixar-receitas">Calculadora nutricional</Link></a>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Page;
