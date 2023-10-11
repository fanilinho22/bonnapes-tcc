import React from 'react';
import "./home.css"
import Header from '../Header/Header';

function Home() {
    const urlExterna = 'https://123milhas.com/';
    return (

        <div className='Home'>
            <Header />
            <div className='inicio'>
                <div className='apresenta'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus nulla, mollis consectetur lobortis et, consequat ut eros. Vestibulum ac mi nec velit bibendum consequat. Nam nec eleifend mauris, eu sagittis nisi.</p>
                </div>
                <div className='apresentaImagem'>
                    <h2>Imagem legal</h2>
                </div>
            </div>


        </div>
    )
}

export default Home
