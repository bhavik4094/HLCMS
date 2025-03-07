import React from 'react'
import HeroThumbImg from "../assets/img/weather-wood.webp";

function Hero() {

    return (
        <div className="container">
            <div className="row">
                <div className='Hero-section'>
                    <img className='hero-img' src={HeroThumbImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero