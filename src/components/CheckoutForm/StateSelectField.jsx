import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormGroup, Col } from "reactstrap";
import Select from "react-select";

const options = [
  { label: "SELECT", value: "SELECT" },
  { label: "ALABAMA", value: "AL" },
  { label: "ALASKA", value: "AK" },
  { label: "AMERICAN SAMOA", value: "AS" },
  { label: "ARIZONA", value: "AZ" },
  { label: "ARKANSAS", value: "AR" },
  { label: "CALIFORNIA", value: "CA" },
  { label: "COLORADO", value: "CO" },
  { label: "CONNECTICUT", value: "CT" },
  { label: "DELAWARE", value: "DE" },
  { label: "DISTRICT OF COLUMBIA", value: "DC" },
  { label: "FEDERATED STATES OF MICRONESIA", value: "FM" },
  { label: "FLORIDA", value: "FL" },
  { label: "GEORGIA", value: "GA" },
  { label: "GUAM", value: "GU" },
  { label: "HAWAII", value: "HI" },
  { label: "IDAHO", value: "ID" },
  { label: "ILLINOIS", value: "IL" },
  { label: "INDIANA", value: "IN" },
  { label: "IOWA", value: "IA" },
  { label: "KANSAS", value: "KS" },
  { label: "KENTUCKY", value: "KY" },
  { label: "LOUISIANA", value: "LA" },
  { label: "MAINE", value: "ME" },
  { label: "MARSHALL ISLANDS", value: "MH" },
  { label: "MARYLAND", value: "MD" },
  { label: "MASSACHUSETTS", value: "MA" },
  { label: "MICHIGAN", value: "MI" },
  { label: "MINNESOTA", value: "MN" },
  { label: "MISSISSIPPI", value: "MS" },
  { label: "MISSOURI", value: "MO" },
  { label: "MONTANA", value: "MT" },
  { label: "NEBRASKA", value: "NE" },
  { label: "NEVADA", value: "NV" },
  { label: "NEW HAMPSHIRE", value: "NH" },
  { label: "NEW JERSEY", value: "NJ" },
  { label: "NEW MEXICO", value: "NM" },
  { label: "NEW YORK", value: "NY" },
  { label: "NORTH CAROLINA", value: "NC" },
  { label: "NORTH DAKOTA", value: "ND" },
  { label: "NORTHERN MARIANA ISLANDS", value: "MP" },
  { label: "OHIO", value: "OH" },
  { label: "OKLAHOMA", value: "OK" },
  { label: "OREGON", value: "OR" },
  { label: "PALAU", value: "PW" },
  { label: "PENNSYLVANIA", value: "PA" },
  { label: "PUERTO RICO", value: "PR" },
  { label: "RHODE ISLAND", value: "RI" },
  { label: "SOUTH CAROLINA", value: "SC" },
  { label: "SOUTH DAKOTA", value: "SD" },
  { label: "TENNESSEE", value: "TN" },
  { label: "TEXAS", value: "TX" },
  { label: "UTAH", value: "UT" },
  { label: "VERMONT", value: "VT" },
  { label: "VIRGIN ISLANDS", value: "VI" },
  { label: "VIRGINIA", value: "VA" },
  { label: "WASHINGTON", value: "WA" },
  { label: "WEST VIRGINIA", value: "WV" },
  { label: "WISCONSIN", value: "WI" },
  { label: "WYOMING", value: "WY" },
];

function StateSelectField({ name, label, whatItIs, placeholder }) {
  const { control } = useFormContext();

  return (
    <FormGroup>
      <Controller
        defaultValue=""
        label={label}
        name={name}
        required
        control={control}
        render={({ field }) => {
          return (
            <Col md={12}>
              {whatItIs}

              <Select
                className="reactSelect"
                options={options}
                {...field}
                className="mb-3"
                placeholder={placeholder}
              />
            </Col>
          );
        }}
      />
    </FormGroup>
  );
}

export default StateSelectField;
