import React from "react";
import Review from "./Review";
import { Button } from "reactstrap";
import {
  Elements,
  ElementsConsumer,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  nextStep,
  backStep,
  addressData,
  checkoutToken,
  onCaptureCheckout,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: addressData.data.firstName,
          lastname: addressData.data.lastName,
          email: addressData.data.email,
        },
        shipping: {
          name: "Primary",
          street: addressData.data.address,
          town_city: addressData.data.city,
          county_state: addressData.data.state.value,
          postal_zip_code: addressData.data.zipcode,
          country: "US",
        },
        fulfillment: { shipping_method: "ship_bWZ3l8Bq1okpEQ" },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      onCaptureCheckout(checkoutToken.id, orderData);
      nextStep();
    }
  };

  return (
    <div className="row">
      <Review checkoutToken={checkoutToken} />
      <hr />
      <h3 className="ms-3 mb-5">Payment Method</h3>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardNumberElement className=" bg-light col-sm-4 mb-4 offset-sm-3 mr-3" />
              <CardExpiryElement className=" bg-light col-sm-4 mb-4 offset-sm-3 mr-3" />
              <CardCvcElement className=" bg-light col-sm-4 offset-sm-3 mr-3" />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  type="submit"
                  className="col-sm-4 offset-sm-3 text no-wrap mr-3"
                  color="primary"
                  disabled={!stripe}>
                  Pay {checkoutToken.live.total_with_tax.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
      <hr />
      <Button
        size="sm"
        className="ms-4 mt-5 col-2 text-nowrap"
        color="outline"
        onClick={() => backStep()}>
        Back
      </Button>
    </div>
  );
};

export default PaymentForm;
