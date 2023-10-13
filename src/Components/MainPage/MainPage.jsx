import React from 'react';
import "./mainPage.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logo from './logo-bon.png'


function Page() {

    return (

        <div className='Home'>
            <Header />
            
            <h1>Home</h1>
            <img src={Logo} alt="logo" />

            <Footer/>
        </div>
    );
}

export default Page;
