import { useEffect, useState } from "react";
import Butter from "buttercms";
import Hero from '../components/Hero';
import Services from "../components/Services";

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);

const HomePage = () => {
  const [servicesData, setServicesData] = useState([]);
  const [headline, setHeadline] = useState('');
  const [subline, setSubline] = useState('');

  useEffect(() => {
    butter.page
      .retrieve('*', 'home')  // Retrieving the 'home' page (or whatever the slug is)
      .then((res) => {
        const servicesSection = res.data.data.fields.services_section;
        setHeadline(servicesSection.headline);
        setSubline(servicesSection.subline);
        setServicesData(servicesSection.services);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  if (!servicesData.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Hero />
      {/* Passing the fetched data as props to Services component */}
      <Services headline={headline} subline={subline} servicesData={servicesData} />
    </div>
  );
};

export default HomePage;
