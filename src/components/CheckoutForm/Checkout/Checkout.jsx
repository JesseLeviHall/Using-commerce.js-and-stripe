import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardBody, Button, Spinner } from "reactstrap";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { Link, useHistory } from "react-router-dom";
import { commerce } from "../../../lib/commerce";

const formTitles = ["Shipping / Billing Address", "Payment Details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [addressData, setAddressData] = useState({});
  const nextStep = () => setActiveStep((activeStep) => activeStep + 1);
  const backStep = () => setActiveStep((activeStep) => activeStep - 1);
  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          setCheckoutToken(token);
        } catch {
          if (activeStep !== StepDisplay.length) history.push("/");
          console.log(error);
        }
      };
      generateToken();
    }
  }, [cart]);

  const StepDisplay = () =>
    activeStep === 0 ? (
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
        <Spinner
          style={{ width: "6rem", height: "6rem", justifyContent: "center" }}
          children={false}
        />
      </div>
    );

  if (error) {
    Confirmation = () => (
      <div>
        <h5>Error: {error}</h5>
        <Button component={Link} type="button" to="/">
          Return
        </Button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3">
          <Card className="mb-3">
            <CardTitle className="m-4">
              <h1>{formTitles[activeStep]}</h1>
            </CardTitle>
            <CardBody>{StepDisplay()}</CardBody>
            {activeStep === formTitles.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <StepDisplay />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
