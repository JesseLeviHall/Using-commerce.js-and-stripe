import React from "react";
import "../cartitem.css";

const Review = ({ checkoutToken }) => {
  return (
    <div>
      <hr />
      <h3 className="ms-3">Order Summary</h3>
      <dl>
        <dt className="col-6 mt-4">
          {checkoutToken.live.line_items.map((product) => (
            <dd className="mt-2 ms-3 my-4" key={product.name}>
              {product.name}{" "}
              <span style={{ marginLeft: "5rem" }}>
                {product.line_total.formatted_with_symbol}
              </span>
              <p style={{ fontSize: 12 }} className="text-muted mb-5 mt-1">
                An excellent Choice
              </p>
            </dd>
          ))}
        </dt>
        <dt className="col-6 mt-4">
          <dd className="mt-2 ms-3 my-5">
            Gross Receipts Tax:
            <span style={{ marginLeft: "4rem" }}>
              {checkoutToken.live.tax.amount.formatted_with_symbol}
            </span>
            <p style={{ fontSize: 12 }} className="text-muted mt-1">
              (Not a factor at this time)
            </p>
          </dd>
          <dd className="mt-2 ms-3 my-4">
            Total:
            <span style={{ marginLeft: "3rem" }}>
              {checkoutToken.live.total_with_tax.formatted_with_symbol}
            </span>
          </dd>
        </dt>
      </dl>
    </div>
  );
};

export default Review;
