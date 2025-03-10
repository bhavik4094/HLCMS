import React from 'react'
import Firstservice from "../assets/img/wood-carving-150x150.png";
import Secondservice from "../assets/img/beam-150x150.png";
import Thirdservice from "../assets/img/color-selection-150x150.png";
function Services() {
    return (
        <div className='Service-section'>
            <div className="conrainer">
      
                    <div className="service-inner-content">
                        <h2 className='service-headline'>THE HIGHEST QUALITY, HANDCRAFTED WOOD BATS SINCE 2010</h2>
                        <p className='service-subline'>
                            Berg Bat was founded on one simple idea: Quality. We use the best Maple, Ash, and Birch wood billets, and each bat is carefully turned, hand-sanded, and steel pressed to make sure it’s perfect. Every bat is made to order and customized to the player’s exact preferences. Before any bat leaves the shop, Trevor personally inspects it to make sure it meets our high standards. With more design options and custom finishes than any other brand, Berg Bat is the top choice for your next wood bat.
                        </p>
                    </div>    
                <div className="service-card">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="card-container">
                            <img className='service-img'  src={Firstservice}  alt="" />
                            <h3 className='service-type-name'> Handcrafted</h3>
                            <p className='service-description'>When you buy a Berg Bat, you get more than just a bat. You get years of practice, mistakes, innovation, and creative inspiration. You not only get a bat, you get part of the Makers's soul.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card-container">
                            <img className='service-img' src={Secondservice} alt="" />
                            <h3 className='service-type-name'> Handcrafted</h3>
                            <p className='service-description'>When you buy a Berg Bat, you get more than just a bat. You get years of practice, mistakes, innovation, and creative inspiration. You not only get a bat, you get part of the Makers's soul.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card-container">
                            <img className='service-img' src={Thirdservice} alt="" />
                            <h3 className='service-type-name'> Handcrafted</h3>
                            <p className='service-description'>When you buy a Berg Bat, you get more than just a bat. You get years of practice, mistakes, innovation, and creative inspiration. You not only get a bat, you get part of the Makers's soul.</p>
                        </div>
                    </div>
                    </div>
                  </div>
          
                </div>
            </div>
        </div>
    )
}

export default Services