import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
import { useMenuItems } from './utils/hooks';

function App() {
  const {footerMenu} = useMenuItems();
  return (
    <>
    <Header />
    <Outlet />
    <Footer footerMenu={footerMenu}/>
    </>
  )
}

export default App
