import React from "react";
import { Button } from "reactstrap";
import "./cartitem.css";

const CartItem = ({ item, onRemoveFromCart }) => {
  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div>
      <dl className="row">
        <>
          <dt className="col-6 ms-4 my-4"> {item.name}</dt>
          <dd className="col-4 ms-5 my-4">
            {item.price.formatted_with_symbol}
            <Button
              outline
              className="col-xs-3 ms-5 text-nowrap"
              size="sm"
              onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </Button>
          </dd>
          <hr />
        </>
      </dl>
    </div>
  );
};

export default CartItem;
