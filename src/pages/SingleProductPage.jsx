import { useEffect, useState } from "react";
import Butter from "buttercms";
import ReviewSlider from '../components/ReviewSlider';
import InstagramFeed from '../components/InstagramFeed';
import SingleProduct from '../components/SingleProduct'

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);
function SingleProductPage() {
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
            <SingleProduct />
            <ReviewSlider reviewSilderData={reviewSilderData} />
            <InstagramFeed instaFeedData={instaFeedData} />

        </div>
    )
}

export default SingleProductPage