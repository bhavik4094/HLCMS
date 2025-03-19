import { Link, useLocation } from "react-router-dom";
import BrandLogo from "../../assets/img/brandlogo.webp";
import { useState, useEffect } from "react";
import CartSidebar from "../CartSidebar";  // Import CartSidebar Component

const Header = ({ leftMenu, rightMenu }) => {
  const location = useLocation();
  
  const isShopPage = location.pathname === "/shop";
  const isCheckoutPage = location.pathname === "/checkout";

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCart);
    };

    updateCart();

    // Listen for cartUpdated event to update cart
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  // Toggle the cart sidebar visibility
  const toggleCartSidebar = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <header className="trans-header">
      <nav className={`navbar navbar-expand-lg navbar-light ${isShopPage ? "shop-page" : ""}${isCheckoutPage ? "shop-page" : ""}`}>
        <div className="container">
          <Link className="navbar-brand fw-bold fs-3 d-block d-lg-none" to="/">
            <img src={BrandLogo} alt="Berg Bat Logo" />
          </Link>

          {/* Mobile Header */}
          <div className="mobile-header">
            <li className="nav-item mx-3 d-block d-lg-none">
              <button
                className="nav-link text-white position-relative bg-transparent border-0"
                onClick={toggleCartSidebar}  // Directly toggle cart
              >
                <svg
                  className="e-font-icon-svg e-eicon-cart-medium"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  fill="white"
                >
                  <path d="M740 854C740 883 763 906 792 906S844 883 844 854 820 802 792 802 740 825 740 854ZM217 156H958C977 156 992 173 989 191L957 452C950 509 901 552 843 552H297L303 581C311 625 350 656 395 656H875C892 656 906 670 906 687S892 719 875 719H394C320 719 255 666 241 593L141 94H42C25 94 10 80 10 62S25 31 42 31H167C182 31 195 42 198 56L217 156ZM230 219L284 490H843C869 490 891 470 895 444L923 219H230ZM677 854C677 791 728 740 792 740S906 791 906 854 855 969 792 969 677 918 677 854ZM260 854C260 791 312 740 375 740S490 791 490 854 438 969 375 969 260 918 260 854ZM323 854C323 883 346 906 375 906S427 883 427 854 404 802 375 802 323 825 323 854Z"></path>
                </svg>
                {cartItems.length > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </button>
            </li>

            {/* Mobile Menu Toggle */}
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
          </div>

          {/* Desktop Header */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              {leftMenu.map((item) => (
                <li className="nav-item mx-3" key={item.label}>
                  <Link className="nav-link text-white fw-semibold" to={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <Link className="navbar-brand fw-bold fs-3 d-none d-lg-block d-xl-block" to="/">
              <img className="brand-logo-img" src={BrandLogo} alt="Berg Bat Logo" />
            </Link>

            <ul className="navbar-nav">
              {rightMenu.map((item) => (
                <li className="nav-item mx-3" key={item.label}>
                  <Link className="nav-link text-white fw-semibold" to={item.url}>{item.label}</Link>
                </li>
              ))}
              <li className="nav-item mx-3 d-none d-lg-block d-xl-block">
                <button
                  className="nav-link text-white position-relative bg-transparent border-0"
                  onClick={toggleCartSidebar}  // Directly toggle cart
                >
                  <svg
                    className="e-font-icon-svg e-eicon-cart-medium"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    fill="white"
                  >
                    <path d="M740 854C740 883 763 906 792 906S844 883 844 854 820 802 792 802 740 825 740 854ZM217 156H958C977 156 992 173 989 191L957 452C950 509 901 552 843 552H297L303 581C311 625 350 656 395 656H875C892 656 906 670 906 687S892 719 875 719H394C320 719 255 666 241 593L141 94H42C25 94 10 80 10 62S25 31 42 31H167C182 31 195 42 198 56L217 156ZM230 219L284 490H843C869 490 891 470 895 444L923 219H230ZM677 854C677 791 728 740 792 740S906 791 906 854 855 969 792 969 677 918 677 854ZM260 854C260 791 312 740 375 740S490 791 490 854 438 969 375 969 260 918 260 854ZM323 854C323 883 346 906 375 906S427 883 427 854 404 802 375 802 323 825 323 854Z"></path>
                  </svg>
                  {cartItems.length > 0 && (
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                      {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Render Cart Sidebar */}
      {cartVisible && (
        <CartSidebar
          cartItems={cartItems}
          setCartItems={setCartItems}
          setCartVisible={setCartVisible}
        />
      )}
    </header>
  );
};

export default Header;
