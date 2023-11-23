import React, { useState } from 'react';
import './cadastro.css';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../PasswordInput/PasswordInput';

function Cadastro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleClick = () => {
        // Salvando os dados no localStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Adicionando usuário padrão para facilitar os testes
        const usuarioPadrao = { email: 'adm', senha: '123' };
        usuarios.push(usuarioPadrao);

        // Adicionando o usuário do formulário 
        if (formData.nome && formData.email && formData.senha) {
            usuarios.push(formData);
        }

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Conta criada com sucesso!');
        navigate('/');
    };

    return (
        <div className='cadastro'>
            <div className='page-cadastro'>
                <div className='cadastro-card'>
                    <h1 id='titulo'>Seja bem-vindo ao Bonnape!</h1>

                    <div className='cima-cadastro'>
                        <div className='card-input'>
                            <label>Nome</label>
                            <input
                                className='inputas'
                                type='text'
                                id='nome'
                                value={formData.nome}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='card-input'>
                            <label>E-mail</label>
                            <input
                                className='inputas'
                                type='text'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='baixo-cadastro'>
                        <div className='card-input'>
                            <label>Senha</label>
                            <PasswordInput
                                id='senha'
                                value={formData.senha}
                                onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                            />
                        </div>

                        <div className='card-input'>
                            <label>Confirmar senha</label>
                            <PasswordInput
                                id='confirmarSenha'
                                value={formData.confirmarSenha}
                                onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                            />
                        </div>
                    </div>
                    <button onClick={handleClick}>Cadastrar</button>

                    <div className='ou'>
                        <hr />
                        <p>OU</p>
                        <hr />
                    </div>

                    <div>
                        <label>Já possui uma conta? </label>
                        <Link className='links' to='/'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
