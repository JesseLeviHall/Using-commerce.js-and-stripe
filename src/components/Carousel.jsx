import React from "react";
import { Card, CardBody, CardImg, Button } from "reactstrap";

export const Carousel = ({ product, add }) => {
  return (
    <Card>
      <CardBody>
        {product.assets.map((image) => {
          <CardImg alt={image.name} src={image.url}></CardImg>;
        })}
        <Button
          color="primary"
          style={{ marginTop: "1rem" }}
          onClick={() => add(product.id, 1)}>
          Add To Cart
        </Button>
      </CardBody>
    </Card>
  );
};
