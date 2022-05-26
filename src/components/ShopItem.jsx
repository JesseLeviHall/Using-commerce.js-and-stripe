import React from "react";
import {
  Modal,
  ModalBody,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { Carousel } from "./Carousel";
import "./shop.css";

const ShopItem = ({ product, onAddToCart }) => {
  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <div className="container">
      <div className="row">
        {product.map((product) => (
          <Card key={product.id} className="col-md-6 p-0 my-5">
            <CardImg src={product.image.url} alt={product.name} />
            <CardBody>
              <CardTitle
                style={{ fontWeight: "bold" }}
                className="gradient__text mb-3"
                id="title">
                {product.name}
              </CardTitle>{" "}
              <Row className="ms-1 align-items-center">
                {"In-stock: "} {product.inventory.available}
                {/* <Col className="offset-1" xs="auto">
                  <Button
                    onClick={toggle}
                    outline
                    color="primary"
                    className="text-nowrap"
                    size="sm">
                    View
                  </Button>
                  <Modal
                    className="gradient__text"
                    isOpen={modal}
                    toggle={toggle}
                    modalTransition={{ timeout: 1000 }}>
                    <ModalBody>
                      <Carousel product={product} add={onAddToCart} />
                      Simple Modal with just ModalBody...
                    </ModalBody>
                  </Modal>
                </Col> */}
              </Row>
              <hr />
              <CardText className="gradient__text" id="description">
                <br />
                <span
                  dangerouslySetInnerHTML={{
                    __html: product.description,
                  }}></span>{" "}
                {product.price.formatted_with_symbol},
              </CardText>
              {product.inventory.available >= 1 ? (
                <Button
                  color="primary"
                  style={{ marginTop: "1rem" }}
                  onClick={() => onAddToCart(product.id, 1)}>
                  Add To Cart
                </Button>
              ) : (
                <p className="gradient__text">(This one sold)</p>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopItem;
