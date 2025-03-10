import { useEffect, useState } from "react";
import butterCMS from "../../utils/buttercms";
import Brandlogo from "../../assets/img/db.webp";

function Header() {
    const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    butterCMS.content
      .retrieve(["navigation_menu"])
      .then((res) => setMenuItems(res.data.data.navigation_menu))
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        
        <a className="navbar-brand fw-bold" href="/">
               <img  src={Brandlogo} alt="" />
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BLog
                </a>
              </li>
            
          </ul>

          
          <div className="ms-3 position-relative">
            <a href="/cart" className="text-white">
              🛒
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header