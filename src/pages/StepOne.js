import React from "react";
import LabelInput from "./LabelInput";
import NameFields from "./NameFields";
import DateOfBirth from "./DateOfBirth";
import Pair from "../images/pair";

const StepOne = ({ register, errors, watch, tick , months }) => (
  <>
    
    <Pair />
    <h1>Uber Insurance quote in <br /> under 2 minutes</h1>
    <p>
      Compare all Uber approved Private Hire motor insurance providers in one place. All Private Hire motor policies must
      be purchased online. All providers offer automatic uploads of your insurance certificate directly to your Uber account,
      which will help streamline your verification process.
    </p>
    <div className="fields">
      <LabelInput
        id="selectField"
        label="Title"
        type="select"
        placeholder="e.g Mrs"
        options={["Mr", "Ms", "Mrs"]}
        register={register("title", { required: true })}
        errors={errors.title}
        watch={watch("title")}
        tick={tick}
      />
      <NameFields {...{ register, errors, watch, tick }} />
      <DateOfBirth {...{ register, errors ,months }} />
      <LabelInput
        id="license"
        label="Driving License Number"
        type="text"
        placeholder="xxx-xx-xxx/xxxxx"
        register={register("license", {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}\/[a-zA-Z0-9]{5}$/,
            message: "Invalid format (xxx-xx-xxx/xxxxx)"
          }
        })}
        errors={errors.license}
        watch={watch("license")}
        tick={tick}
      />
      <button type="submit" className="getStartedButton">Get Started</button>
    </div>
  </>
);

export default StepOne;