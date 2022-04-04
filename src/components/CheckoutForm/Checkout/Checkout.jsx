import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardBody, Button, Spinner } from "reactstrap";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { Link } from "react-router-dom";
import { commerce } from "../../../lib/commerce";

const formTitles = ["Shipping / Billing Address", "Payment Details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [step, setStep] = useState(0);
  const [addressData, setAddressData] = useState({});
  const nextStep = () => setStep((activeStep) => activeStep + 1);
  const backStep = () => setStep((activeStep) => activeStep - 1);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log(token);
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    generateToken();
  }, [cart]);

  const stepDisplay = () =>
    step === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        nextStep={nextStep}
        backStep={backStep}
        addressData={addressData}
        checkoutToken={checkoutToken}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  const next = (data) => {
    setAddressData(data);
    nextStep();
  };

  let Confirmation = () =>
    order.customer ? (
      <div>
        <h5>Thank you very much {order.customer.firstname}!</h5>
        <hr />
        <p>Order reference: {order.customer_reference} </p>
        <Button
          component={Link}
          to="./Shop"
          size="md"
          className="col-5 mt-5 text-nowrap "
          color="primary">
          Done
        </Button>
      </div>
    ) : (
      <div className="ms-5">
        <Spinner></Spinner>
      </div>
    );

  if (error) {
    <div>
      <h5>Error: {error}</h5>
    </div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3">
          <Card className="mb-3">
            <CardTitle className="m-4">
              <h1>{formTitles[step]}</h1>
            </CardTitle>
            <CardBody>{stepDisplay()}</CardBody>
            {step === formTitles.length ? <Confirmation /> : <div />}
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
