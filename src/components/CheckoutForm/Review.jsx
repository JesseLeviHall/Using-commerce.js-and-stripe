import React from "react";
import "../cartitem.css";

const Review = ({ checkoutToken }) => {
  return (
    <div className="container-md">
      <hr />
      <h3 className="ms-3">Order Summary</h3>
      <div className="row">
        <div className="col-sm-12 offset-sm-2 mt-4">
          {checkoutToken.live.line_items.map((product) => (
            <div className="mt-2 ms-3 my-4" key={product.name}>
              {product.name}{" "}
              <span>
                <img
                  src={product.image.url}
                  alt={"img"}
                  height="60"
                  width="60"
                  className="offset-1"></img>
              </span>
              <span className="col-1 offset-1">
                {product.line_total.formatted_with_symbol}
              </span>
              <p style={{ fontSize: 12 }} className="text-muted mb-5 mt-1">
                An excellent Choice
              </p>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-sm-12 offset-sm-2 mt-4">
            <div className="col-sm-12 ms-3 mt-2">
              Gross Receipts Tax:
              <span className="col-1 offset-2">
                {checkoutToken.live.tax.amount.formatted_with_symbol}
              </span>
              <p style={{ fontSize: 12 }} className="text-muted mt-1">
                ( Not a factor at this time )
              </p>
            </div>
          </div>
          <div className="row offset-sm-1 mt-3">
            <div className="col-sm-3 offset-sm-1 mb-5 mt-4">
              Total:
              <span className="col-1 offset-3">
                {checkoutToken.live.total_with_tax.formatted_with_symbol}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
