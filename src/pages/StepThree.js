import React from "react";
import LabelInput from "./LabelInput";
import DateOfBirth from "./DateOfBirth";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";  


const StepThree = ({ register, errors, watch, control, tick }) => (
  <>


    <h1>Quote Details</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="fields">
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <DatePicker
            placeholderText="MM/DD/YYYY"
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            dateFormat="MM/dd/yyyy"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            className={`inputFields nameinput ${errors.date ? "error" : ""}`}
          />
        )}
      />
      {errors.date && <span className="errorField">This field is required</span>}
      <LabelInput
        id="VehicleReg"
        label="Vehicle Registration"
        type="text"
        placeholder="e.g EA21 WLP"
        register={register("VehicleReg", { required: true })}
        errors={errors.VehicleReg}
        watch={watch("VehicleReg")}
        tick={tick}
      />
      <div className="addressButton">
        <button type="button" className="lookAddbtn lookBtn">Look up registration</button>
        <button type="button" className="addManbtn">Enter manually</button>
      </div>
      <div className="addressFind">
        <a className="findAddbtn" href="#">Having trouble finding your vehicle?</a>
      </div>
      <label className="labelName">Who owns this vehicle?</label>
      <div className="radioGroup">
        <label className="radioLabel">
          <input type="radio" value="me" {...register("ownership", { required: true })} /> Me
        </label>
        <label className="radioLabel">
          <input type="radio" value="someone_else" {...register("ownership", { required: true })} /> Someone else
        </label>
      </div>
      {errors.ownership && <span className="errorField">This field is required</span>}
      <DateOfBirth {...{ register, errors, prefix: "quote"}} />
      <LabelInput
        id="seats"
        label="How Many Seats Does Your Taxi Have"
        type="number"
        placeholder="e.g. 4"
        register={register("seats", { required: "This field is required" })}
        errors={errors.seats}
        watch={watch("seats")}
        tick={tick}
      />
      <div className="inputFieldContainer">
        <label className="labelName" htmlFor="marketValue">Estimated market value of vehicle</label>
        <div className="inputRow">
          <select
            id="currency"
            name="currency"
            defaultValue=""
            className="currencySelect"
            {...register("currency", { required: true })}
          >
            <option value="" disabled hidden>£</option>
            <option value="£">£</option>
            <option value="$">$</option>
            <option value="€">€</option>
          </select>
          <div className="inputWithIcon">
            <input
              placeholder="e.g 7,000"
              type="number"
              id="marketValue"
              name="marketValue"
              className={`inputFields ${errors.marketValue ? "error" : ""}`}
              {...register("marketValue", { required: "This field is required" })}
            />
            {watch("marketValue") && <img src={tick} alt="Tick Icon" className="tickIcon" />}
          </div>
        </div>
        {errors.marketValue && <span className="errorField">{errors.marketValue.message}</span>}
      </div>
    </div>
  </>
);

export default StepThree;