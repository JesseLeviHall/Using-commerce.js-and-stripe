import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Form, Button } from "reactstrap";
import StateSelectField from "./StateSelectField";
import CustomFormInput from "./CustomTextField";
import image from "../../assets/stripe.png";

const AddressForm = ({ next }) => {
  const methods = useForm();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <FormProvider {...methods}>
            <Form
              className="ms-3 mt-4 mb-3"
              onSubmit={methods.handleSubmit((data) =>
                next({
                  data,
                })
              )}>
              <CustomFormInput
                name="firstName"
                placeholder="First Name"
                label="first name"
                whatItIs="First Name"
              />
              <CustomFormInput
                name="lastName"
                placeholder="Last Name"
                label="last name"
                whatItIs="Last Name"
              />
              <CustomFormInput
                name="address"
                placeholder="Street Address"
                label="address"
                whatItIs="Address"
              />
              <CustomFormInput
                name="city"
                placeholder="City"
                label="city"
                whatItIs="City"
              />
              <StateSelectField
                name="state"
                placeholder="State"
                label="state"
                whatItIs="State"
              />
              <CustomFormInput
                name="zipcode"
                placeholder="Zip Code"
                label="zipcode"
                whatItIs="Zip Code"
              />
              <CustomFormInput
                name="email"
                placeholder="Email"
                label="email"
                whatItIs="Email"
              />
              <Button
                type="submit"
                size="md"
                className="col-5 mt-5 text-nowrap "
                color="primary">
                Next
              </Button>
            </Form>
          </FormProvider>
        </div>
        <div className="col mt-5 text-md-right">
          <h4 className="ms-5">Shipping options </h4>
          <p className="ms-5 mt-3">
            The cost of taxes and shipping in the United States are included in
            the price!{" "}
          </p>
          <p className="ms-5 mt-3">
            Please ensure your billing address is the same as your shipping
            address. To ship to a different address send a massage with the info
            to the email address below with your order confirmation.
          </p>
          <h4 className="ms-5 mt-5">Information </h4>
          <p className="ms-5 mt-3">
            Secure Checkout is provided by Stripe. Your information is not
            stored or shared in anyway.
            <img src={image} height="200" className="mt-2" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
