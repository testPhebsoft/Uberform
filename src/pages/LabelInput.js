import React, { useState } from "react";
import { Controller } from "react-hook-form";

const LabelInput = ({
  id,
  label,
  type,
  placeholder,
  register,
  errors,
  watch,
  tick,
  options,
  control,
}) => {
  const [isInputClicked, setIsInputClicked] = useState(true);

  return (
    <div className="licField">
      <label className="labelName" htmlFor={id}>
        {label}
      </label>
      <div className="licField">
        {type === "select" ? (
          <select
            onClick={() => setIsInputClicked(!isInputClicked)}
            data-clicked={isInputClicked ? "true" : "false"}
            id={id}
            defaultValue=""
            className={`inputFields  ${errors ? "error" : ""}`}
            {...register}
          >
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : type === "date" ? (
          <Controller
            name={id}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                onClick={() => setIsInputClicked(!isInputClicked)}
                data-clicked={isInputClicked ? "true" : "false"}
                placeholderText="MM/DD/YYYY"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                dateFormat="MM/dd/yyyy"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className={`inputFields nameinput ${errors ? "error" : ""}`}
              />
            )}
          />
        ) : (
          <input
            onClick={() => setIsInputClicked(!isInputClicked)}
            data-clicked={isInputClicked ? "true" : "false"}
            placeholder={placeholder}
            type={type}
            id={id}
            className={`inputFields nameinput ${errors ? "error" : ""}`}
            {...register}
          />
        )}
        {watch && <img src={tick} alt="Tick Icon" className="tickIcon" />}
      </div>
      {errors && <span className="errorField">this Field is required</span>}
    </div>
  );
};

export default LabelInput;
