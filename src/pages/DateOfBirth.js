import React from "react";

const DateOfBirth = ({ register, errors, prefix = "" }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].map((month, index) => ({ value: (index + 1).toString(), name: month }));

  return (
    <div>
      <label htmlFor={`${prefix}dob`} className="labelName">
        Date of Birth
      </label>
      <div className="dobFields">
        <div>
          <select
            id={`${prefix}Day`}
            className={`inputFields dateInputFields text-padding ${
              errors[`${prefix}Day`] ? "error" : ""
            }`}
            name={`${prefix}Day`}
            defaultValue=""
            {...register(`${prefix}Day`, { required: true })}
          >
            <option value="" disabled hidden>
              Day
            </option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          {errors[`${prefix}Day`] && (
            <span className="errorField"> Required</span>
          )}
        </div>

        <div>
          <select
            id={`${prefix}Month`}
            className={`inputFields dateInputFields text-padding ${
              errors[`${prefix}Month`] ? "error" : ""
            }`}
            name={`${prefix}Month`}
            defaultValue=""
            {...register(`${prefix}Month`, { required: true })}
          >
            <option value="" disabled hidden>
              Month
            </option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.name}
              </option>
            ))}
          </select>
          {errors[`${prefix}Month`] && (
            <span className="errorField"> Required</span>
          )}
        </div>

        <div>
          <select
            id={`${prefix}Year`}
            className={`inputFields dateInputFields text-padding ${
              errors[`${prefix}Year`] ? "error" : ""
            }`}
            name={`${prefix}Year`}
            defaultValue=""
            {...register(`${prefix}Year`, { required: true })}
          >
            <option value="" disabled hidden>
              Year
            </option>
            {Array.from({ length: 100 }, (_, i) => (
              <option
                key={new Date().getFullYear() - i}
                value={new Date().getFullYear() - i}
              >
                {new Date().getFullYear() - i}
              </option>
            ))}
          </select>
          {errors[`${prefix}Year`] && (
            <span className="errorField"> Required</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateOfBirth;
