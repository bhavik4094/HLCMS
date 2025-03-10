import React from 'react'
import ProductImg from "../assets/img/Elite_YTG19HP.jpg";

function Product() {
  return (
    <div className='product-section'>
        <div className="container">
            <div className="row">
                <h2 className='product-section-title'>STOCK LUMBER</h2>
                <div className="col-lg-3">
                    <div className="product-card">
                        <img className='product-img' src={ProductImg} alt="" />
                        <h3 className='product-name'>Elite Series – YTG19HP</h3>
                        <p className='product-price'>$149.99</p>
                        <a className='buy-btn' href="">Buy Now</a>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="product-card">
                        <img className='product-img' src={ProductImg} alt="" />
                        <h3 className='product-name'>Elite Series – YTG19HP</h3>
                        <p className='product-price'>$149.99</p>
                        <a className='buy-btn' href="">Buy Now</a>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="product-card">
                        <img className='product-img' src={ProductImg} alt="" />
                        <h3 className='product-name'>Elite Series – YTG19HP</h3>
                        <p className='product-price'>$149.99</p>
                        <a className='buy-btn' href="">Buy Now</a>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="product-card">
                        <img className='product-img' src={ProductImg} alt="" />
                        <h3 className='product-name'>Elite Series – YTG19HP</h3>
                        <p className='product-price'>$149.99</p>
                        <a className='buy-btn' href="">Buy Now</a>
                    </div>
                </div>
               <div className='btn-part' >
               <a className='shop-more-btn' href="">SHOP MORE</a>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Product