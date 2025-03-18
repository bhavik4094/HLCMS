import React, { useEffect, useState } from 'react';
import ShopProduct from '../components/ShopProduct';
import ReviewSlider from '../components/ReviewSlider';
import InstagramFeed from '../components/InstagramFeed';
import Butter from "buttercms";

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);

function ShopPage() {
  const [reviewSilderData, setReviewSilderData] = useState(null);
  const [instaFeedData, setInstaFeedData] = useState(null);

  useEffect(() => {
    // Fetch the data for the ReviewSlider and InstagramFeed components from ButterCMS
    butter.page
      .retrieve('*', 'home')  // Assuming 'home' page holds this data, adjust if needed
      .then((res) => {
        const fields = res.data.data.fields;
        const reviewSliderSection = fields.review_slider;
        const instaFeedSection = fields.instagram_feeds;

        setReviewSilderData(reviewSliderSection);
        setInstaFeedData(instaFeedSection);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  if (!reviewSilderData || !instaFeedData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ShopProduct />
      
      {/* Reuse the ReviewSlider and InstagramFeed components */}
      <ReviewSlider reviewSilderData={reviewSilderData} />
      <InstagramFeed instaFeedData={instaFeedData} />
    </div>
  );
}

export default ShopPage;
