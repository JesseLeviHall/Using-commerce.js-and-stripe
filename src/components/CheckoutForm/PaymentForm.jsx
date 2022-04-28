import React from "react";
import Review from "./Review";
import { Button, Form } from "reactstrap";
import {
  Elements,
  CardElement,
  ElementsConsumer,
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
          gateway: "gway_NoygZG9ZQO0Yl8",
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
              <CardElement />
              <br /> <br />
              <Button
                type="submit"
                className="col-sm-4 mb-5 ms-sm-5 text no-wrap mr-3"
                color="primary"
                disabled={!stripe}>
                Pay {checkoutToken.live.total_with_tax.formatted_with_symbol}
              </Button>
              <div>
                <Button
                  size="sm"
                  className="ms-2 my-5 col-2 text-nowrap"
                  color="outline"
                  onClick={() => backStep()}>
                  Back
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;
