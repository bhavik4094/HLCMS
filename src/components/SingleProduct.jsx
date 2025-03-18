import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Butter from "buttercms";
import { Link } from "react-router-dom"; // Ensure React Router is imported

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);

const SingleProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [cartVisible, setCartVisible] = useState(false); // Sidebar visibility

  // Fetching product details from ButterCMS
  useEffect(() => {
    butter.content
      .retrieve(["products"])
      .then((response) => {
        const allProducts = response.data.data.products;
        const foundProduct = allProducts.find(
          (item) =>
            item.product_name
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "") === slug
        );

        if (foundProduct) {
          setProduct(foundProduct);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [slug]);

  // Persist cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to the cart
  const addToCart = () => {
    if (!product) return;

    const uniqueKey = `${product.id}-${product.product_name}`;

    const existingItem = cart.find((item) => item.uniqueKey === uniqueKey);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.uniqueKey === uniqueKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1, uniqueKey }]);
    }

    setCartVisible(true); // Show cart sidebar
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Remove item from the cart
  const removeFromCart = (uniqueKey) => {
    setCart(cart.filter((item) => item.uniqueKey !== uniqueKey));
  };

  // Update item quantity in the cart
  const updateQuantity = (uniqueKey, amount) => {
    setCart(
      cart.map((item) =>
        item.uniqueKey === uniqueKey
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Loading and product not found states
  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <div className="product-container">
      <div className="product-all-details">
        <div className="container">
          <div className="row">
            {/* Product Details */}
            <div className="product-details-part">
              <div className="product-details">
                <div className="product-meta-details col-12 col-lg-4">
                  <h2 className="product-name">{product.product_name}</h2>
                  <h3 className="price">${product.product_price}</h3>
                </div>
                <div className="product-img-btn col-12 col-lg-8">
                  <img
                    className="product-img"
                    src={product.single_product_page_img}
                    alt={product.product_name}
                  />
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="faq-part col-12 col-lg-6">
              <p className="faq-answer">
                {product.product_description || "No description available."}
              </p>
              <p className="powered-title">
                {product.powered_by || "No description available."}
              </p>
              <p className="powered-des">
                {product.powered_by_description || "No description available."}
              </p>
            </div>

            {/* Add to Cart Button */}
            <div className="product-type col-12 col-lg-6">
              <button className="add-to-cart" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {cartVisible && (
        <div className="cart-sidebar">
          <div className="cart-header">
            <h2>My Cart ({cart.length})</h2>
            <button className="close-cart" onClick={() => setCartVisible(false)}>
              ✖
            </button>
          </div>
          <div className="cart-items">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.uniqueKey} className="cart-item">
                  <img
                    src={item.single_product_page_img}
                    alt={item.product_name}
                  />
                  <div className="cart-details">
                    <h3>{item.product_name}</h3>
                    <p>Price: ${item.product_price}</p>
                    <div className="quantity">
                      <p>Quantity:</p>
                      <div className="add-btn-part">
                        <button
                          className="add-btn"
                          onClick={() => updateQuantity(item.uniqueKey, -1)}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className="add-btn"
                          onClick={() => updateQuantity(item.uniqueKey, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.uniqueKey)}
                  >
                    🗑
                  </button>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div className="cart-footer">
            <p>
              Total: $
              {cart
                .reduce((acc, item) => acc + item.product_price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
