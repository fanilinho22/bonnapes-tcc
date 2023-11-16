import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "./mainPage.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner1 from './img/1.png'
import Banner2 from './img/2.png'
import Banner3 from './img/3.png'
import Banner4 from './img/4.png'
import Banner5 from './img/5.png'
import Banner6 from './img/6.png'
import Banner7 from './img/7.png'
import Banner8 from './img/8.png'
import Banner9 from './img/9.png'
import Banner10 from './img/10.png'


function mainPage() {

    const carouselSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 8000,
    };

    return (

        <div className='mainP'>
            <Header />

            <div className='select-bar'>
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

                <div className='carousel'>
                    <Slider {...carouselSettings}>
                        <img className='image' src={Banner1} alt='Banner' />
                        <img className='image' src={Banner2} alt='Banner' />
                        <img className='image' src={Banner3} alt='Banner' />
                        <img className='image' src={Banner4} alt='Banner' />
                        <img className='image' src={Banner5} alt='Banner' />
                        <img className='image' src={Banner6} alt='Banner' />
                        <img className='image' src={Banner7} alt='Banner' />
                        <img className='image' src={Banner8} alt='Banner' />
                        <img className='image' src={Banner9} alt='Banner' />
                        <img className='image' src={Banner10} alt='Banner' />
                    </Slider>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default mainPage;
