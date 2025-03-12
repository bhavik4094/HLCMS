import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
import { useMenuItems } from './utils/hooks';
import { useEffect, useState } from "react";
import butterCMS from "./utils/buttercms";

function App() {
  const {footerMenu, leftMenu, rightMenu} = useMenuItems();
  const [footerImg, setFooterImg] = useState([]);
  const [copyrightTxt, setCopyrightTxt] = useState([]);
    useEffect(() => {
      butterCMS.page
        .retrieve('*', 'home')  
        .then((res) => {
          const fields = res.data.data.fields;
          const footerSection = fields.footer_component;
          setFooterImg(footerSection.footer_logo);
          setCopyrightTxt(footerSection.copyright_label);
        })
        .catch((err) => console.error('Error fetching data:', err));
    }, []);
  return (
    <>
    <Header leftMenu={leftMenu} rightMenu={rightMenu}/>
    <Outlet />
    <Footer footerMenu={footerMenu} footerImg={footerImg} copyrightTxt={copyrightTxt}/>
    </>
  )
}

export default App
