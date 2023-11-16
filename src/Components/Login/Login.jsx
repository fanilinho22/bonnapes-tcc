import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../PasswordInput/PasswordInput';
import Logo from './logo-bon.png';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleLogin = () => {
        // Obtendo os usuários do localStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
        // Verificando se o e-mail e a senha correspondem a um usuário registrado
        const usuarioEncontrado = usuarios.find(
            (user) => user.email === formData.email && user.senha === formData.senha
        );
    
        if (usuarioEncontrado) {
            // Salvando informações do usuário no localStorage
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
            alert('Login bem-sucedido!');
            navigate('/home');  // Redireciona para a página de perfil
        } else {
            alert('E-mail ou senha incorretos. Por favor, tente novamente.');
        }
    };

    return (
        <div className='login'>
            <div className='page'>
                <div className='logo-frame'>
                    <img src={Logo} alt='logo' />
                </div>

                <div className='login-card'>
                    <h1 id='titulo'>Bem-vindo de volta!</h1>

                    <label>E-mail</label>
                    <input
                        className='inputas'
                        type='text'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label id='sen'>Senha</label>
                    <PasswordInput id='senha' value={formData.senha} onChange={handleChange} />

                    <button onClick={handleLogin}>Entrar</button>

                    <div className='ou'>
                        <hr />
                        <p>OU</p>
                        <hr />
                    </div>

                    <div>
                        <label>Novo por aqui? </label>
                        <Link className='links' to='/cadastro'>
                            Cadastre-se
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
