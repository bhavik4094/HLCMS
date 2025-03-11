import BrandLogo from "../../assets/img/db.webp";

const Header = ({ leftMenu, rightMenu }) => {
  return (
    <header className="trans-header">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          {/* Logo in Center */}
          <a className="navbar-brand fw-bold fs-3 d-block d-lg-none " href="/">

            <img src={BrandLogo} alt="Berg Bat Logo" />
          </a>
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
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
          </button>


          <div className="collapse navbar-collapse justify-content-evenly" id="navbarNav">
            {/* Left Menu */}
            <ul className="navbar-nav">
              {leftMenu.map((item) => (
                <li className="nav-item mx-3" key={item.label}>
                  <a className="nav-link text-white  fw-semibold" href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>

            {/* Logo in Center */}
            <a className="navbar-brand fw-bold fs-3 d-none d-lg-block d-xl-block" href="/">

              <img src={BrandLogo} alt="Berg Bat Logo" />
            </a>

            {/* Right Menu */}
            <ul className="navbar-nav">
              {rightMenu.map((item) => (
                <li className="nav-item mx-3" key={item.label}>
                  <a className="nav-link text-white  fw-semibold" href={item.url}>{item.label}</a>
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