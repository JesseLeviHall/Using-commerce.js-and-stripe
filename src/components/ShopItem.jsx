import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import "./shop.css";

const ShopItem = ({ product, onAddToCart }) => {
  return (
    <div className="container">
      <div className="row">
        {product.map((product) => (
          <Card key={product.id} className="col-md-6 p-0 my-5">
            <CardImg src={product.image.url} alt={product.name} />
            <CardBody>
              <CardTitle
                style={{ fontWeight: "bold" }}
                className="gradient__text"
                id="title">
                {product.name}
              </CardTitle>{" "}
              {"In-stock: "} {product.inventory.available}
              <hr />
              <CardText className="gradient__text" id="description">
                <br />
                <span
                  dangerouslySetInnerHTML={{
                    __html: product.description,
                  }}></span>{" "}
                {product.price.formatted_with_symbol},
              </CardText>
              <Button
                color="primary"
                style={{ marginTop: "1rem" }}
                onClick={() => onAddToCart(product.id, 1)}>
                Add To Cart
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopItem;
