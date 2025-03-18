import React, { useEffect, useState } from "react";
import Butter from "buttercms";
import { Link } from "react-router-dom";

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    butter.content
      .retrieve(["products"])
      .then((response) => {
        if (response.data.data.products) {
          setProducts(response.data.data.products.slice(0, 4)); // Display only first 4 products
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
      .replace(/\s+/g, "-") // Replace spaces with "-"
      .replace(/[^\w-]+/g, ""); // Remove special characters

    return (
      <div className="col-lg-3 col-md-6 col-12">
        <div className="product-card">
          {/* Image wrapped in Link */}
          <Link to={`/product/${formattedSlug}`} state={{ product }}>
            <img className="product-img" src={product.product_img} alt={product.product_name} />
          </Link>
          <h3 className="product-name">{product.product_name}</h3>
          <p className="product-price">${product.product_price}</p>

          {/* Updated Buy Now Button as <a> */}
          <Link to={`/product/${formattedSlug}`} state={{ product }} className="buy-btn">
            Buy Now
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <h2 className="product-section-title">STOCK LUMBER</h2>
          {loading ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => <ProductCard key={product.meta.id} product={product} />)
          )}
          <div className="btn-part">
           <Link className="shop-more-btn" to="/shop">SHOP MORE</Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
