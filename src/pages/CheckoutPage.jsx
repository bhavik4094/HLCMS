import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [customer, setCustomer] = useState({ name: "", email: "", address: "", city: "", zip: "" });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleCheckout = () => {
        if (!customer.name || !customer.email || !customer.address || !customer.city || !customer.zip) {
            alert("Please fill in all the fields.");
            return;
        }

        alert("Order placed successfully!");
        localStorage.removeItem("cart"); // Clear cart after order
        setCart([]); // Clear state
        navigate("/"); // Redirect to home page after order
    };

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="cart-summary">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.uniqueKey} className="cart-item">
                            <img src={item.single_product_page_img} alt={item.product_name} />
                            <div>
                                <h3>{item.product_name}</h3>
                                <p>Price: ${item.product_price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>

            <div className="customer-info">
                <h3>Customer Information</h3>
                <input className="input-content" type="text" name="name" placeholder="Full Name" value={customer.name} onChange={handleInputChange} required />
                <input className="input-content" type="email" name="email" placeholder="Email" value={customer.email} onChange={handleInputChange} required />
                <input className="input-content" type="text" name="address" placeholder="Address" value={customer.address} onChange={handleInputChange} required />
                <input className="input-content" type="text" name="city" placeholder="City" value={customer.city} onChange={handleInputChange} required />
                <input className="input-content" type="text" name="zip" placeholder="ZIP Code" value={customer.zip} onChange={handleInputChange} required />

                <button onClick={handleCheckout} className="checkout-button">Place Order</button>
            </div>
        </div>
    );
};

export default CheckoutPage;
