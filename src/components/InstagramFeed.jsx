import React, { useEffect } from 'react'
import { Swiper } from "swiper/bundle";

function InstagramFeed({instaFeedData}) {
    console.log(instaFeedData);
    
    useEffect(() => {
        const instaSwiper = new Swiper(".instagram-slider",{
            spaceBetween: 5,
            slidesPerView: 4,
            loop: true,
            autoHeight: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: true,
            },
            speed: 3000,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 3.5,
                    spaceBetween: 5,
                },
                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 5,
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                },
            },
        });
    }, []);

  return (
    <div className="instagram-section">
        <div className="container">
            <h2 className="insta-sec-heading">{instaFeedData.heading}</h2>
            <h3 className="instagram-username"><a href={instaFeedData.instagram_profile_link}>{instaFeedData.instagram_username}</a></h3>
            <div className="swiper instagram-slider">
                <div className="swiper-wrapper">
                    {instaFeedData.insta_images.map((img, index)=>(
                        <div className="img-wrap-inner swiper-slide" key={index}>
                            <img src={img.insta_image} alt="Instagram Feed Image" className="instagram-img" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default InstagramFeed