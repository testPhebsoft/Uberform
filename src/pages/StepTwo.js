import React from "react";
import LabelInput from "./LabelInput";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";


const StepTwo = ({ register, errors, watch, control, tick }) => (
  <>

    <h1>Welcome Pete!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="fields">
      <LabelInput
        id="address"
        label="House name or number"
        type="text"
        placeholder="e.g 12"
        register={register("address", { required: true })}
        errors={errors.address}
        watch={watch("address")}
        tick={tick}
      />
      <LabelInput
        id="postcode"
        label="Postcode"
        type="text"
        placeholder="e.g M50 3YJ"
        register={register("postcode", { required: true })}
        errors={errors.postcode}
        watch={watch("postcode")}
        tick={tick}
      />
      <div className="addressButton">
        <button type="button" className="lookAddbtn">Look up address</button>
        <button type="button" className="addManbtn">Enter address manually</button>
      </div>
      <div className="addressFind">
        <a className="findAddbtn" href="#">Having trouble finding your address?</a>
      </div>
      <Controller
        name="phone"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <PhoneInput
            className="PhoneNo"
            {...field}
            country={"us"}
            placeholder="99 999 9999 999"
            inputProps={{
              name: "phone",
              required: true,
              className: `phoneInput nameinput ${errors.phone ? "error" : ""}`
            }}
          />
        )}
      />
      {errors.phone && <span className="errorField">This field is required</span>}
      <LabelInput
        id="email"
        label="Email"
        type="email"
        placeholder="example@email.com"
        register={register("email", {
          required: "This field is required",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: "Invalid email address"
          }
        })}
        errors={errors.email}
        watch={watch("email")}
        tick={tick}
      />
      <LabelInput
        id="selectField"
        label="Uber Driving Rating"
        type="select"
        placeholder="please Select"
        options={["Blue", "Gold", "Platinum", "Diamond"]}
        register={register("Rating", { required: true })}
        errors={errors.Rating}
        watch={watch("Rating")}
        tick={tick}
      />
      <p className="contactDetail">
        This is your Uber Pro Status. Please ensure this is accurate as it will be validated by Uber and will affect your price.
      </p>
    </div>
  </>
);

export default StepTwo;