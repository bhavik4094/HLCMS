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
    <header className="trans-header">
      <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        {/* Toggle Button for Mobile */}
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

        <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
          {/* Left Menu */}
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <a className="nav-link text-white  fw-semibold" href="#home">Home</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white fw-semibold" href="#shop">Shop</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white fw-semibold" href="#fzntechnology">FZN Technology</a>
            </li>
          </ul>

          {/* Logo in Center */}
          <a className="navbar-brand fw-bold fs-3 " href="/">
            
            <img src={BrandLogo} alt="Berg Bat Logo" />
          </a>

          {/* Right Menu */}
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <a className="nav-link text-white fw-semibold" href="#about">About</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white fw-semibold" href="#team">Team</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white fw-semibold" href="#blog">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;