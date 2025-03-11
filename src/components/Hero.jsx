import React, { useState, useEffect } from 'react';
import Butter from 'buttercms';

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY); // Replace with your actual API key

function Hero({heroImage}) {
  
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="hero-section">
            {heroImage ? (
              <img className="hero-img" src={heroImage} alt="Hero" />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
