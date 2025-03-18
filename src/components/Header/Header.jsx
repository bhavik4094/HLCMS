import { Link, useLocation } from "react-router-dom";
import BrandLogo from "../../assets/img/brandlogo.webp";

const Header = ({ leftMenu, rightMenu }) => {
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";

  return (
    <header className="trans-header">
      <nav className={`navbar navbar-expand-lg navbar-light ${isShopPage ? "shop-page" : ""}`}>
        <div className="container">
          {/* Logo in Center */}
          <Link className="navbar-brand fw-bold fs-3 d-block d-lg-none" to="/">
            <img src={BrandLogo} alt="Berg Bat Logo" />
          </Link>

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
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            {/* Left Menu */}
            <ul className="navbar-nav">
              {leftMenu.map((item) => (
                <li className="nav-item mx-3" key={item.label}>
                  <Link className="nav-link text-white fw-semibold" to={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>

            {/* Logo in Center */}
            <Link className="navbar-brand fw-bold fs-3 d-none d-lg-block d-xl-block" to="/">
              <img className="brand-logo-img" src={BrandLogo} alt="Berg Bat Logo" />
            </Link>

            {/* Right Menu */}
            <ul className="navbar-nav">
              {rightMenu.map((item) => (
                <li className="nav-item mx-3" key={item.label}>
                  <Link className="nav-link text-white fw-semibold" to={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
