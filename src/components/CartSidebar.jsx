import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const CartSidebar = ({ cartItems, setCartItems, setCartVisible }) => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);  // Create a ref to the sidebar element

  // Function to update the quantity of an item in the cart
  const updateQuantity = (uniqueKey, amount) => {
    const updatedCart = cartItems.map(item =>
      item.uniqueKey === uniqueKey ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); // Notify other components
  };

  // Function to remove an item from the cart
  const removeFromCart = (uniqueKey) => {
    const updatedCart = cartItems.filter(item => item.uniqueKey !== uniqueKey);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Close the cart if the user clicks outside of the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setCartVisible(false); // Close cart if click is outside
      }
    };

    // Add event listener for outside click
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setCartVisible]);

  return (
    <div className="cart-sidebar" ref={sidebarRef}>
      <div className="cart-header">
        <h2>My Cart ({cartItems.length})</h2>
        <button className="close-cart" onClick={() => setCartVisible(false)}>✖</button>
      </div>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.uniqueKey} className="cart-item">
              <img src={item.single_product_page_img} alt={item.product_name} />
              <div className="cart-details">
                <h3>{item.product_name}</h3>
                <p>Price: ${item.product_price}</p>
                <div className="quantity">
                  <p>Quantity:</p>
                  <div className="add-btn-part">
                    <button className="add-btn" onClick={() => updateQuantity(item.uniqueKey, -1)}>-</button>
                    {item.quantity}
                    <button className="add-btn" onClick={() => updateQuantity(item.uniqueKey, 1)}>+</button>
                  </div>
                </div>
              </div>
              <button className="remove-item" onClick={() => removeFromCart(item.uniqueKey)}>🗑</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-footer">
        <p>
          Total: ${cartItems.reduce((acc, item) => acc + item.product_price * item.quantity, 0).toFixed(2)}
        </p>
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
