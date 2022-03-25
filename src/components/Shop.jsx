import React from "react";
import "./shop.css";
import ShopItem from "./ShopItem";

function Shop({ product, onAddToCart }) {
  if (!product.length) return <p>Loading...</p>;
  return (
    <div className="container">
      <div className="row">
        <ShopItem product={product} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
}

export default Shop;
