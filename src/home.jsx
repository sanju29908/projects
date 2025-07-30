import React, { useEffect, useState } from 'react';
import './home.css';


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">💎 Flipkart Jewelry Collection</h1>
      <div className="product-list">
        {products.length === 0 ? (
          <div className="loading-spinner">Loading products...</div>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-category">📂 {product.category}</p>
                <p className="product-price">₹ {product.price.toFixed(2)}</p>
                <button className="buy-button">🛒 Buy Now</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
