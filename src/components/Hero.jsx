import React from 'react'
import HeroThumbImg from "../assets/img/Hero-two-img.webp";

function Hero() {

    return (
        <div className="hero">
            <div className="container">
            <div className="row">
                <div className='hero-section'>
                    <img className='hero-img' src={HeroThumbImg} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero