import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormGroup, Input, Col } from "reactstrap";

function CustomFormInput({ name, label, whatItIs, placeholder }) {
  const { control } = useFormContext();

  return (
    <FormGroup>
      <Controller
        name={name}
        label={label}
        required
        control={control}
        render={({ field }) => {
          return (
            <Col md={12}>
              {whatItIs}
              <Input {...field} className="mb-3" placeholder={placeholder} />
            </Col>
          );
        }}
      />
    </FormGroup>
  );
}

export default CustomFormInput;
