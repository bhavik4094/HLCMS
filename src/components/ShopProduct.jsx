import React, { useEffect, useState } from "react";
import Butter from "buttercms";
import { Link, useLocation } from "react-router-dom";

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);

function ShopProduct() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation(); // Get current route

    // Function to determine the page title dynamically
    const getPageTitle = () => {
        const path = location.pathname;
        if (path.startsWith("/product/")) return "PRODUCT DETAILS";
        if (path === "/shop") return "SHOP";
       
        return "SHOP"; // Default title
    };

    useEffect(() => {
        butter.content
            .retrieve(["products"])
            .then((response) => {
                if (response.data.data.products) {
                    setProducts(response.data.data.products);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    const ProductCard = ({ product }) => {
        const formattedSlug = product.product_name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");

        return (
            <div className="col-lg-3 col-md-6 col-12">
                <div className="product-card">
                    <Link to={`/product/${formattedSlug}`} state={{ product }}>
                        <img className="product-img" src={product.product_img} alt={product.product_name} />
                    </Link>
                    <h3 className="product-name">{product.product_name}</h3>
                    <p className="product-price">${product.product_price}</p>
                    <Link to={`/product/${formattedSlug}`} state={{ product }} className="buy-btn">
                        Buy Now
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="shop-section">
                <div className="page-title-part">
                    <h3 className="page-title-name">{getPageTitle()}</h3>
                </div>
                <div className="product-section">
                    <div className="container">
                        <div className="row">
                            {loading ? (
                                <p>Loading products...</p>
                            ) : (
                                products.map((product) => <ProductCard key={product.meta.id} product={product} />)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopProduct;
