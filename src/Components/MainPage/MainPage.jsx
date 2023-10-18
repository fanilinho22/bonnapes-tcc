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
                    <a><Link to="/home">Pesquisar receitas</Link></a>
                </div>
                <div className='nav-bar-box'>
                    <a><Link to="/home">Receitas salvas</Link></a>
                </div>
                <div className='nav-bar-box'>
                    <a><Link to="/home">Conversor de medidas</Link></a>
                </div>
                <div className='nav-bar-box'>
                    <a><Link to="/home">Sugestão</Link></a>
                </div>
                <div className='nav-bar-box'>
                    <a><Link to="/home">Baixar receitas</Link></a>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Page;
