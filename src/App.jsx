import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
import { useMenuItems } from './utils/hooks';
import { useEffect, useState } from "react";
import butterCMS from "./utils/buttercms";

function App() {
  const {footerMenu, leftMenu, rightMenu} = useMenuItems();
  const [footerImg, setFooterImg] = useState([]);
    useEffect(() => {
      butterCMS.page
        .retrieve('*', 'home')  // Retrieving the 'home' page (or whatever the slug is)
        .then((res) => {
          const fields = res.data.data.fields;
          const footerSection = fields.footer_component;
          setFooterImg(footerSection.footerImg);
        })
        .catch((err) => console.error('Error fetching data:', err));
    }, []);
  return (
    <>
    <Header leftMenu={leftMenu} rightMenu={rightMenu}/>
    <Outlet />
    <Footer footerMenu={footerMenu} footerImg={footerImg}/>
    </>
  )
}

export default App
