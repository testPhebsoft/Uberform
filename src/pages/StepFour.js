import React from "react";
import LabelInput from "./LabelInput";
import DateOfBirth from "./DateOfBirth";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

const StepFour = ({ register, errors, watch, control, tick }) => (
  <>
    <h1>Quote Details</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="fields">
      <LabelInput
        id="bonus"
        label="Taxi no claim bonus"
        type="select"
        options={["4 years", "5 years", "6 years", "7 years"]}
        placeholder="select amount"
        register={register("bonus", { required: true })}
        errors={errors.bonus}
        watch={watch("bonus")}
        tick={tick}
      />

      <label className="labelName">
        Would you like to protect your no claim bonus?
      </label>
      <div className="radioGroup">
        <label className="radioLabel">
          <input
            type="radio"
            value="yes"
            {...register("NoClaimBonus", { required: true })}
          />{" "}
          Yes
        </label>
        <label className="radioLabel">
          <input
            type="radio"
            value="No"
            {...register("NoClaimBonus", { required: true })}
          />{" "}
          No
        </label>
      </div>
      {errors.NoClaimBonus && (
        <span className="errorField">This field is required</span>
      )}
      <LabelInput
        id="UkResident"
        label="I have been a UK resident for"
        type="select"
        options={["0-4 years", "5-9 years", "10-14 years", "15-19 years"]}
        placeholder="Select amount"
        register={register("UkResident", { required: true })}
        errors={errors.UkResident}
        watch={watch("UkResident")}
        tick={tick}
      />
       <LabelInput
        id="licenseAuth"
        label="Licensing authority"
        type="text"  
        placeholder="e.g Winchester"
        register={register("LicenseAuth", { required: true })}
        errors={errors.LicenseAuth}
        watch={watch("LicenseAuth")}
        tick={tick}
      />
       <LabelInput
        id="uberbranch"
        label="Uber branch"
        type="select"
        options={["Derby City", "Dunham Country", "Glasgow", "Havant Borough"]}
        placeholder="Select branch"
        register={register("uberbranch", { required: true })}
        errors={errors.uberbranch}
        watch={watch("uberbranch")}
        tick={tick}
      />
       <LabelInput
        id="taxiBatch"
        label="I have held my taxi badge for"
        type="select"
        options={["Derby City", "Dunham Country", "Glasgow", "Havant Borough"]}
        placeholder="Select amount"
        register={register("taxiBatch", { required: true })}
        errors={errors.taxiBatch}
        watch={watch("taxiBatch")}
        tick={tick}
      />
      
      <label className="labelName">
      Have you had any Accidents, claims, thefts or losses in the last 5 years?
      </label>
      <div className="radioGroup">
        <label className="radioLabel">
          <input
            type="radio"
            value="yes"
            {...register("accidentsClaim", { required: true })}
          />{" "}
          Yes
        </label>
        <label className="radioLabel">
          <input
            type="radio"
            value="No"
            {...register("accidentsClaim", { required: true })}
          />{" "}
          No
        </label>
      </div>
      {errors.accidentsClaim && (
        <span className="errorField">This field is required</span>
      )}
     
    </div>
  </>
);

export default StepFour;
