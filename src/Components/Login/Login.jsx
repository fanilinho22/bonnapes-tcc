import React from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../PasswordInput/PasswordInput';
import Logo from './logo-bon.png'


function Login() {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate('/home')
      };
      
    return (
        <div className='login'>
            <div className='page'>
                <div className='logo-frame'>
                    <img src={Logo} alt="logo" />
                </div>


                <div className='login-card'>
                    <h1 id='titulo'>Bem vindo de volta!</h1>

                    <label >E-mail</label>
                    <input className='inputas' type="text" id="inputE" />

                    <label id='sen'>Senha</label>
                    <PasswordInput />

                    <button onClick={handleClick}>Entrar</button>

                    <div className='ou'>
                        <hr />
                        <p>OU</p>
                        <hr />
                    </div>

                    <div>
                        <label >Novo por aqui? </label>
                        <Link className='links' to="/cadastro">Cadastre-se</Link>
                    </div>

                </div>

            </div>
        </div>


    );
}

export default Login;
