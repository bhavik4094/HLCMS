import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Butter from "buttercms";

const butter = Butter(import.meta.env.VITE_BUTTERCMS_API_KEY);

const SingleProductPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    butter.content
      .retrieve(["products"])
      .then((response) => {
        const allProducts = response.data.data.products;
        const foundProduct = allProducts.find((item) =>
          item.product_name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "") === slug
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

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <div className="product-container">
      <div className="product-all-details">
        <div className="container">
          <div className="row">
            <div className="product-details-part">
              <div className="product-details">
                <div className="col-lg-4">
                  <h2 className="product-name">{product.product_name}</h2>
                  <h3 className="price">${product.product_price}</h3>
                </div>
                <div className="col-lg-8">
                  <img
                    className="product-img"
                    src={product.single_product_page_img} // Fetching from ButterCMS
                    alt={product.product_name}
                  />
                </div>
              </div>
            </div>
            <div className="faq-part col-lg-6">
              
              <p className="faq-answer">{product.product_description || "No description available."}</p>
            </div>
            <div className="product-type col-lg-6">
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
