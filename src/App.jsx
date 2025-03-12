import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
import { useMenuItems } from './utils/hooks';
import { useEffect, useState } from "react";
import butterCMS from "./utils/buttercms";

function App() {
  const {footerMenu, leftMenu, rightMenu} = useMenuItems();
  const [footerData, setFooterData] = useState(null);
    useEffect(() => {
      butterCMS.page
        .retrieve('*', 'home')  
        .then((res) => {
          const footerSection = res.data.data.fields.footer_component;
          setFooterData(footerSection);  // Set the entire footer section object
        })
        .catch((err) => console.error('Error fetching footer data:', err));
    }, []);

    // If footer data is not yet fetched, return loading state or placeholder
    if (!footerData) {
      return <div>Loading footer...</div>;
    }
  return (
    <>
    <Header leftMenu={leftMenu} rightMenu={rightMenu}/>
    <Outlet />
    <Footer footerMenu={footerMenu} footerData={footerData}/>
    </>
  )
}

export default App
