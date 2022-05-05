import React from "react";
import { Link } from "react-router-dom";
import "./thankyou.css";

const Thankyou = ({ order, onDone }) => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col my-5">
          Thank you very much {order.customer.firstname}!
        </h1>
      </div>
      <hr />
      <p>Order reference: {order.customer_reference} </p>
      <br />
      <p>
        There will be an email reciept and order summary for you shortly. <br />{" "}
        Shipping confirmation will also be emailed as soon as your order is
        sent. <br />
        <br />
        Enjoy your day {order.customer.firstname}! <br />
      </p>
      <Link
        to="/Welcome"
        className="btn btn-primary mt-3 mb-5"
        onClick={() => onDone()}>
        Done
      </Link>
    </div>
  );
};
export default Thankyou;
