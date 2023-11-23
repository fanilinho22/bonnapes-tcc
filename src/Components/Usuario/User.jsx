import React from 'react';
import { Link } from 'react-router-dom';
import "./user.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function User() {
    // Obtendo as informações do usuário do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) || {};
    const nomeAbreviado = usuarioLogado.nome ? usuarioLogado.nome.substr(0, 2) : '';

    return (
        <div className='user'>
            <Header />
            <h1 className="titulo-user">Perfil do Usuário</h1>
            <div className='paguser'>

                <div className="conteudo-user">
                    <img
                        src={`https://via.placeholder.com/100?text=${nomeAbreviado}`}
                        className="Profile-picture"
                        alt="profile"
                    />
                    <div className="informacao-perfil">
                        <h1>{usuarioLogado.nome}</h1>
                        <p>Email: {usuarioLogado.email}</p>
                        <a><Link to="/">Sair da conta</Link></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default User;
