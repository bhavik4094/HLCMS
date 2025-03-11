import { useEffect, useState } from "react";
import Butter from "buttercms";
import Hero from '../components/Hero';
import Services from "../components/Services";
import Product from "../components/Product";

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);

const HomePage = () => {
  const [servicesData, setServicesData] = useState([]);
  const [headline, setHeadline] = useState('');
  const [subline, setSubline] = useState('');
  const [heroImage, setHeroImage] = useState('');

  useEffect(() => {
    butter.page
      .retrieve('*', 'home')  // Retrieving the 'home' page (or whatever the slug is)
      .then((res) => {
        const fields = res.data.data.fields;
        const servicesSection = fields.services_section;
        const heroSection = fields.hero_section;
  
        setHeadline(servicesSection.headline);
        setSubline(servicesSection.subline);
        setServicesData(servicesSection.services);
        setHeroImage(heroSection.hero_img);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);
  
  

  if (!servicesData.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Hero heroImage={heroImage}/>
      {/* Passing the fetched data as props to Services component */}
      <Services headline={headline} subline={subline} servicesData={servicesData} />
      <Product />
    </div>
  );
};

export default HomePage;
