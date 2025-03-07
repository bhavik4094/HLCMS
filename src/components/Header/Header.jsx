import { useEffect, useState } from "react";
import butter from "../../utils/buttercms";

function Header() {
    const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    butter.content
      .retrieve(["navigation_menu"])
      .then((res) => setMenuItems(res.data.data.navigation_menu))
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="/">
          BERG BAT
        </a>

        {/* Mobile Toggle Button */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item) => (
              <li key={item.title} className="nav-item">
                <a className="nav-link" href={item.url}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Cart Icon */}
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