import { useEffect, useState } from "react";
import Butter from "buttercms";
import Hero from '../components/Hero';
import Services from "../components/Services";
import Product from "../components/Product";
import Ourstrory from "../components/Ourstrory";

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);

const HomePage = () => {
  const [servicesData, setServicesData] = useState([]);
  const [headline, setHeadline] = useState('');
  const [subline, setSubline] = useState('');
  const [heroImage, setHeroImage] = useState('');
  const [heroImageSecond, setHeroImageSecond] = useState('');
  const [sectionTitle, setsectionTitle] = useState('');
  const [storyHeadline, setstoryHeadline] = useState('');
  const [storyDescription, setstoryDescription] = useState('');
  const [storyBtnTitle, setstoryBtnTitle] = useState('');
  const [storyBtnLink, setstoryBtnLink] = useState('');
  const [storyImage, setstoryImage] = useState('');

  useEffect(() => {
    butter.page
      .retrieve('*', 'home')
      .then((res) => {
        const fields = res.data.data.fields;
        const servicesSection = fields.services_section;
        const heroSection = fields.hero_section;
        const ourstorySection = fields.our_story_section;

        setHeadline(servicesSection.headline);
        setSubline(servicesSection.subline);
        setServicesData(servicesSection.services);
        setHeroImage(heroSection.hero_img);
        setHeroImageSecond(heroSection.hero_img_second);
        setsectionTitle(ourstorySection.section_title);
        setstoryHeadline(ourstorySection.headline);
        setstoryDescription(ourstorySection.description);
        setstoryBtnTitle(ourstorySection.button_title);
        setstoryBtnLink(ourstorySection.button_link);
        setstoryImage(ourstorySection.our_story_imag);

      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);



  if (!servicesData.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Hero heroImage={heroImage} heroImageSecond={heroImageSecond} />
      <Services headline={headline} subline={subline} servicesData={servicesData} />
      <Ourstrory sectionTitle={sectionTitle} storyHeadline={storyHeadline} storyDescription={storyDescription} storyBtnTitle={storyBtnTitle} storyBtnLink={storyBtnLink} storyImage={storyImage} />
      <Product />
    </div>
  );
};

export default HomePage;
