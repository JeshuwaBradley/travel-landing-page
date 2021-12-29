import React from 'react';
import './hero.css';

function Hero({imageSrc}) {
    return (
        <div className='hero'>
            <img src={imageSrc} alt='Travel' className='heroImage' />
            <h1 className='heroTitle'>Traval for beginners</h1>
        </div>
    )
}

export default Hero;
