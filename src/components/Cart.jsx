import React from "react";
import CartItem from "./CartItem";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, onRemoveFromCart, onEmptyCart }) => {
  const RenderEmptyCart = () => (
    <div className="row">
      <Card>
        <CardHeader className="bg-muted link ">
          <h3>Your Shopping Cart</h3>
        </CardHeader>
        <CardBody>
          <p className="col ms-5 my-5">
            There is nothing in the cart yet.
            <Link className="my-3 ms-5" to={"./Shop"}>
              <Button outline color="primary">
                Go add something!
              </Button>
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );

  if (!cart.line_items) return <p>Loading....</p>;

  const RenderCart = () => (
    <div className="row">
      <Card>
        <CardHeader className="mb-5">
          <h3>Your Shopping Cart</h3>
        </CardHeader>
        {cart.line_items.map((lineItem) => (
          <div key={lineItem.id}>
            <CartItem item={lineItem} onRemoveFromCart={onRemoveFromCart} />
          </div>
        ))}
        <dl className="row">
          <>
            <dt className="col-6 ms-4 my-2 fw-light">Total Before Checkout </dt>
            <dd className="col-4 ms-5 my-2">
              {" "}
              {cart.subtotal.formatted_with_symbol}
              <Button
                outline
                className="col-xs-4 ms-5 text-nowrap"
                size="sm"
                onClick={() => onEmptyCart()}>
                Empty Cart
              </Button>
            </dd>
            <div className="row">
              <Link to={"/Checkout"}>
                <Button
                  color="primary"
                  className="col-3 ms-4 mt-5 text-nowrap"
                  size="sm">
                  Checkout
                </Button>
              </Link>
            </div>
          </>
        </dl>
      </Card>
    </div>
  );

  return (
    <div className="container mt-5 mb-5">
      {!cart.line_items.length ? <RenderEmptyCart /> : <RenderCart />}
    </div>
  );
};

export default Cart;
