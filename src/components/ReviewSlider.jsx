import React from 'react';
import { useEffect } from "react";
import Swiper from "swiper/bundle";

function ReviewSlider({reviewSilderData}) {
    useEffect(() => {
        const swiper2 = new Swiper(".mySwiper", {
          spaceBetween: 30,
          slidesPerView: 4,
          loop: true,
          autoHeight: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: true,
          },
          speed: 5000,
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          },
        });
      }, []);
  return (
    <div className="review-slider">
        <div className="container">
            <div className="row">
                <h2 className="section-heading">{reviewSilderData.heading}</h2>
                <div className="heading-text">
                    <img src={reviewSilderData.sub_heading_image} className="review-stars" />
                    <span>{reviewSilderData.sub_heading}</span>
                </div>
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        {reviewSilderData.slider_images.map((img) => (
                            <div className="swiper-slide">
                                <img src={img.slider_image} alt="Slider images" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewSlider