import React from 'react';
import { HERO_CONTENT } from "../constants/data";

const Hero = () => {
    return (
        <section id="#" className='hero'>
            <div className='hero-content'>{HERO_CONTENT}</div>
            <img className='hero-img' src="android-7479380_1920.png" alt="robot image" />
        </section>
    );
};

export default Hero;