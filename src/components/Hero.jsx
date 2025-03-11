import React, { useState, useEffect } from 'react';
import Butter from 'buttercms';

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY); // Replace with your actual API key

function Hero({heroImage, heroImageSecond}) {
  
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="hero-section">
        
              <img className="hero-img" src={heroImage} alt="Hero" />
              <div className='dark-overlay'></div>
              <img className="hero-img-second" src={heroImageSecond} alt="Hero Second" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
