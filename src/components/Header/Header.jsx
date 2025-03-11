import BrandLogo from "../../assets/img/db.webp";

const Header = ({leftMenu, rightMenu}) => {
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
            {leftMenu.map((item) => (
              <li className="nav-item mx-3" key={item.label}>
                <a className="nav-link text-white  fw-semibold" href={item.url}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Logo in Center */}
          <a className="navbar-brand fw-bold fs-3 " href="/">
            
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