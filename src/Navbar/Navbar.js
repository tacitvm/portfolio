import React from 'react';
//menu icons
import Ghlogo from './gh-logo.svg';
import Email from './email.svg';


export default function Navbar(props) {

    return (
    <div className='navbar-cont'>
        <h1>{props.webInfo.title}</h1>
        <nav>
            <a href='#email'><img className='menu-icons' src={Email} alt='Contact me'/></a>
            <a href='https://github.com/tacitvm'><img className='menu-icons' src={Ghlogo} alt='My github'/></a>
        </nav>
    </div>
    );
};
