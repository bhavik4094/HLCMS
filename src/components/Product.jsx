import React, { useEffect, useState } from "react";
import Butter from "buttercms";

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);

function ProductCard({ product }) {
    return (
      <div className="col-lg-3 col-md-6 col-12">
        <div className="product-card">
          <img className="product-img" src={product.product_img} alt={product.product_name} />
          <h3 className="product-name">{product.product_name}</h3>
          <p className="product-price">${product.product_price}</p>
          {product.product_link ? (
            <a className="buy-btn" href={product.product_link} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          ) : (
            <button className="buy-btn disabled">No Link Available</button>
          )}
        </div>
      </div>
    );
  }
  

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    butter.content
      .retrieve(["products"])
      .then((response) => {
        console.log("ButterCMS Response:", response.data); // Debugging step
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

  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <h2 className="product-section-title">STOCK LUMBER</h2>
          {loading ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <ProductCard key={product.meta.id} product={product} />
            ))
          )}
          <div className="btn-part">
            <a className="shop-more-btn" href="#">SHOP MORE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
