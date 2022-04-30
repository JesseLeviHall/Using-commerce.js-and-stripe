import React from "react";
import "./shop.css";
import ShopItem from "./ShopItem";
import { Spinner } from "reactstrap";

function Shop({ product, onAddToCart }) {
  if (!product.length)
    return (
      <div
        style={{
          display: "block",
          width: 700,
          padding: 30,
        }}>
        <Spinner
          style={{ width: "6rem", height: "6rem", justifyContent: "center" }}
          children={"false"}
        />
      </div>
    );
  return (
    <div className="container">
      <div className="row">
        <ShopItem product={product} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
}

export default Shop;

//if sold out don't show.
