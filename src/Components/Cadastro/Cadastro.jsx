import React from 'react';
import './cadastro.css'
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../PasswordInput/PasswordInput';



function Cadastro() {
    const navigate = useNavigate()

    const handleClick = () => {
        alert('Conta criada com sucesso!');
        navigate('/')
    };
    return (
        <div className='cadastro'>
            <div className='page-cadastro'>


                <div className='cadastro-card'>
                    <h1 id='titulo'>Seja bem vindo ao Bonnape!</h1>

                    <div className='cima-cadastro'>
                        <div className='card-input'>
                            <label >Nome</label>
                            <input className='inputas' type="text" id="inputN" />
                        </div>

                        <div className='card-input'>
                            <label >E-mail</label>
                            <input className='inputas' type="text" id="inputE" />
                        </div>

                    </div>

                    <div className='baixo-cadastro'>
                        <div className='card-input'>
                            <label >Senha</label>
                            <PasswordInput/>
                        </div>

                        <div className='card-input'>
                            <label >Confirmar senha</label>
                            <PasswordInput/>
                        </div>

                    </div>


                    <button onClick={handleClick}>Cadastrar</button>

                    <div className='ou'>
                        <hr />
                        <p>OU</p>
                        <hr />
                    </div>

                    <div>
                        <label >Já possui uma conta? </label>
                        <Link className='links' to="/">Login</Link>
                    </div>

                </div>

            </div>
        </div>


    );
}

export default Cadastro;
