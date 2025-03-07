import { useEffect, useState } from "react";
import Butter from "buttercms";
import Hero from '../components/Hero';

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);
console.log("ButterCMS API Key:", import.meta.env.VITE_BUTTERCMS_API_KEY);

const HomePage = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    butter.page
      .retrieve("*", "home-page")
      .then((res) => setContent(res.data.data.fields))
      .catch((err) => console.error(err));
  }, []);

  if (!content) return <p>Loading...</p>;

  return (
    <div>
      <Hero/>
    </div>
  );
};

export default HomePage;
