import React from "react";
import LabelInput from "./LabelInput";

const NameFields = ({ register, errors, watch, tick }) => (
  <div className="nameFields">
    <LabelInput
      id="firstName"
      label="First Name"
      type="text"
      placeholder="Enter your first name"
      register={register("firstName", { required: true })}
      errors={errors.firstName}
      watch={watch("firstName")}
      tick={tick}
    />
    <LabelInput
      id="lastName"
      label="Last Name"
      type="text"
      placeholder="Enter your last name"
      register={register("lastName", { required: true })}
      errors={errors.lastName}
      watch={watch("lastName")}
      tick={tick}
    />
  </div>
);

export default NameFields;