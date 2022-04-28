import React from "react";
import Review from "./Review";
import { Button, Form } from "reactstrap";
import { Elements, CardElement } from "@stripe/react-stripe-js";
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

  //there is a card element and card element consumer discrepancy here
  //discrepancey with the form tags

  return (
    <div className="row">
      <Review checkoutToken={checkoutToken} />
      <hr />
      <h3 className="ms-3 mb-5">Payment Method</h3>
      <Elements stripe={stripePromise}>
        <Form>
          <CardElement className=" bg-light mb-5 col-sm-4 ms-sm-3 mr-3">
            {({ elements, stripe }) => (
              <form onSubmit={(e) => handleSubmit(e, elements, stripe)}></form>
            )}
          </CardElement>
          <Button
            type="submit"
            className="col-sm-4 mb-5 ms-sm-3 text no-wrap mr-3"
            color="primary">
            Pay {checkoutToken.live.total_with_tax.formatted_with_symbol}
          </Button>
        </Form>
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
