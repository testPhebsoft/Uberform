import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Helmet } from "fusion-plugin-react-helmet-async";
import { assetUrl } from "fusion-core";
import Pair from "../images/pair";

import PhoneInput from "react-phone-input-2";
import DatePicker from "react-datepicker";



const flag = assetUrl("../../node_modules/react-phone-input-2/lib/style.css");
const datePicker = assetUrl(
  "../../node_modules/react-datepicker/dist/react-datepicker.css"
);

const css = assetUrl("./home.css");

const Home = () => {
  const tick = assetUrl("../images/tick.svg");
  const previous = assetUrl("../images/previous.svg");
  // const Right = assetUrl("../images/Right.svg");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const [currentStep, setCurrentStep] = useState(3);
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    if (currentStep === 2) {
      console.log({ ...formData, ...data }); // Handle form submission

      setCurrentStep(3);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const months = [
    { value: "1", name: "January" },
    { value: "2", name: "February" },
    { value: "3", name: "March" },
    { value: "4", name: "April" },
    { value: "5", name: "May" },
    { value: "6", name: "June" },
    { value: "7", name: "July" },
    { value: "8", name: "August" },
    { value: "9", name: "September" },
    { value: "10", name: "October" },
    { value: "11", name: "November" },
    { value: "12", name: "December" },
  ];

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={css} />
        <link rel="stylesheet" href={flag} />
        <link rel="stylesheet" href={datePicker} />
      </Helmet>
      <nav>Uber</nav>
      <div className="container form">
        <div className="container border">
          <form onSubmit={handleSubmit(onSubmit)}>
            {currentStep === 1 && (
              <>
                <Pair />
                <h1>
                  Uber Insurance quote in <br /> under 2 minutes
                </h1>
                <p>
                  Compare all Uber approved Private Hire motor insurance
                  providers in one place. All Private Hire motor policies must
                  be purchased online. All providers offer automatic uploads of
                  your insurance certificate directly to your Uber account,
                  which will help streamline your verification process.
                </p>
                <div className="fields">
                  <label htmlFor="selectField" className="labelName">
                    Title
                  </label>
                  <div className="licField">
                    <select
                      id="selectField"
                      defaultValue=""
                      className={`inputFields ${errors.title ? "error" : ""}`}
                      name="title"
                      {...register("title", { required: true })}
                    >
                      <option value="" disabled hidden>
                        e.g Mrs
                      </option>
                      <option value="Mr">Mr</option>
                      <option value="Ms">Ms</option>
                      <option value="Mrs">Mrs</option>
                    </select>
                    {watch("title") && (
                      <img src={tick} alt="Tick Icon" className="tickIcon" />
                    )}
                  </div>
                  {errors.title && (
                    <span className="errorField">This field is required</span>
                  )}
                  <div className="nameFields">
                    <div>
                      <label className="labelName" htmlFor="firstName">
                        First Name
                      </label>
                      <div className="licField">
                        <input
                          placeholder="Enter your first name"
                          type="text"
                          id="firstName"
                          name="firstName"
                          className={`inputFields nameinput ${
                            errors.firstName ? "error" : ""
                          }`}
                          {...register("firstName", { required: true })}
                        />
                        {watch("firstName") && (
                          <img
                            src={tick}
                            alt="Tick Icon"
                            className="tickIcon"
                          />
                        )}
                      </div>
                      {errors.firstName && (
                        <span className="errorField">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="labelName" htmlFor="lastName">
                        Last Name
                      </label>
                      <div className="licField">
                        <input
                          placeholder="Enter your last name"
                          type="text"
                          id="lastName"
                          name="lastName"
                          className={`inputFields nameinput ${
                            errors.lastName ? "error" : ""
                          }`}
                          {...register("lastName", { required: true })}
                        />
                        {watch("lastName") && (
                          <img
                            src={tick}
                            alt="Tick Icon"
                            className="tickIcon"
                          />
                        )}
                      </div>
                      {errors.lastName && (
                        <span className="errorField">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="dob" className="labelName">
                      Date of Birth
                    </label>
                    <div className="dobFields">
                      <div>
                        <select
                          id="day"
                          className={`inputFields dateInputFields text-padding ${
                            errors.day ? "error" : ""
                          }`}
                          name="day"
                          defaultValue=""
                          {...register("day", { required: true })}
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
                        {errors.day && (
                          <span className="errorField">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div>
                        <select
                          id="month"
                          className={`inputFields dateInputFields text-padding ${
                            errors.month ? "error" : ""
                          }`}
                          name="month"
                          defaultValue=""
                          {...register("month", { required: true })}
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
                        {errors.month && (
                          <span className="errorField">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div>
                        <select
                          id="year"
                          defaultValue=""
                          className={`inputFields dateInputFields text-padding ${
                            errors.year ? "error" : ""
                          }`}
                          name="year"
                          {...register("year", { required: true })}
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
                        {errors.year && (
                          <span className="errorField">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="licField">
                    <label className="labelName" htmlFor="name">
                      Driving License Number
                    </label>
                    <div className="licField">
                      <input
                        placeholder="xxx-xx-xxx/xxxxx"
                        type="text"
                        id="name"
                        name="license"
                        className={`inputFields ${
                          errors.license ? "error" : ""
                        }`}
                        {...register("license", {
                          required: true,
                          pattern: {
                            value: /^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}\/[a-zA-Z0-9]{5}$/,
                            message: "Invalid format (xxx-xx-xxx/xxxxx)",
                          },
                        })}
                      />
                      {watch("license") &&
                        watch("license").match(
                          /^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}\/[a-zA-Z0-9]{5}$/
                        ) && (
                          <img
                            src={tick}
                            alt="Tick Icon"
                            className="tickIcon"
                          />
                        )}
                    </div>
                    {errors.license && (
                      <span className="errorMessage">
                        {errors.license.message}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    className="getStartedButton"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Get Started
                  </button>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h1>Welcome Pete!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="fields">
                  <div>
                    <label className="labelName" htmlFor="address">
                      House name or number
                    </label>
                    <div className="licField">
                      <input
                        placeholder="e.g 12"
                        type="text"
                        id="address"
                        name="address"
                        className={`inputFields nameinput ${
                          errors.address ? "error" : ""
                        }`}
                        {...register("address", { required: true })}
                      />
                      {watch("address") && (
                        <img src={tick} alt="Tick Icon" className="tickIcon" />
                      )}
                    </div>
                    {errors.address && (
                      <span className="errorField">This field is required</span>
                    )}
                  </div>
                  <div>
                    <label className="labelName" htmlFor="postcode">
                      Postcode
                    </label>
                    <div className="licField">
                      <input
                        placeholder="e.g M50 3YJ"
                        type="text"
                        id="postcode"
                        name="postcode"
                        className={`inputFields nameinput ${
                          errors.postcode ? "error" : ""
                        }`}
                        {...register("postcode", { required: true })}
                      />
                      {watch("postcode") && (
                        <img src={tick} alt="Tick Icon" className="tickIcon" />
                      )}
                    </div>
                    {errors.postcode && (
                      <span className="errorField">This field is required</span>
                    )}
                  </div>
                  <div className="addressButton">
                    <button type="button" className="lookAddbtn">
                      Look up address
                    </button>
                    <button type="button" className="addManbtn">
                      Enter address manually
                    </button>
                  </div>
                  <div className="addressFind">
                    <a className="findAddbtn" href="#">
                      Having trouble finding your address?
                    </a>
                  </div>

                  <div>
                    <label className="labelName" htmlFor="phone">
                      Contact Form
                    </label>
                    <div className="licField conMar">
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
                            // disableCountryCode
                            onChange={field.onChange}
                            inputProps={{
                              name: "phone",

                              required: true,
                              autoFocus: true,
                              className: ` phoneInput nameinput ${
                                errors.phone ? "error" : ""
                              }`,
                            }}
                          />
                        )}
                      />
                      {watch("phone") && (
                        <img src={tick} alt="Tick Icon" className="tickIcon" />
                      )}
                    </div>
                    {errors.phone && (
                      <span className="errorField">This field is required</span>
                    )}
                  </div>
                  <div className="emailField">
                    <label className="labelName" htmlFor="email">
                      Email
                    </label>
                    <div className="licField">
                      <input
                        placeholder="example@email.com"
                        type="email"
                        id="email"
                        name="email"
                        className={`inputFields nameinput ${
                          errors.email ? "error" : ""
                        }`}
                        {...register("email", {
                          required: "This field is required",
                          pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {watch("email") &&
                        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(
                          watch("email")
                        ) && (
                          <img
                            src={tick}
                            alt="Tick Icon"
                            className="tickIcon"
                          />
                        )}
                    </div>
                    {errors.email && (
                      <span className="errorField">{errors.email.message}</span>
                    )}
                  </div>

                  <label htmlFor="selectField" className="labelName">
                    Uber Driving Rating
                  </label>
                  <div className="licField">
                    <select
                      id="selectField"
                      defaultValue=""
                      className={`inputFields ${errors.Rating ? "error" : ""}`}
                      name="title"
                      {...register("Rating", { required: true })}
                    >
                      <option value="" disabled hidden>
                        Please Select
                      </option>
                      <option value="Mr">Blue</option>
                      <option value="Ms">Gold</option>
                      <option value="Mrs">Platinum</option>
                      <option value="Mrs">Diamond</option>
                    </select>
                    {watch("Rating") && (
                      <img src={tick} alt="Tick Icon" className="tickIcon" />
                    )}
                  </div>
                  <p className="contactDetail">
                    This is your Uber Pro Status. Please ensure this is accurate
                    as it will be validated by Uber and will affect your price.
                  </p>
                  {errors.Rating && (
                    <span className="errorField">This field is required</span>
                  )}
                </div>
                <div className="multiBtn">
                  <button
                    type="Button"
                    className="prevBtn"
                    onClick={handlePrevious}
                  >
                    {" "}
                    <img className="PrevImg" src={previous} alt="" />
                  </button>
                  <button type="submit" className="nextBtn">
                    Next
                  </button>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <h1>Quote Details</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="fields">
                  <label className="labelName" htmlFor="date">
                  When would you like your cover to start?
                  </label>
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
                        className={`inputFields nameinput ${
                          errors.date ? "error" : ""
                        }`}
                      />
                    )}
                  />
                  {errors.date && (
                    <span className="errorField">This field is required</span>
                  )}
                  <div>
                    <label className="labelName" htmlFor="VehicleReg">
                      Vehicle Registration
                    </label>
                    <div className="licField">
                      <input
                        placeholder="e.g EA21 WLP"
                        type="text"
                        id="VehicleReg"
                        name="VehicleReg"
                        className={`inputFields nameinput ${
                          errors.VehicleReg ? "error" : ""
                        }`}
                        {...register("VehicleReg", { required: true })}
                      />
                      {watch("VehicleReg") && (
                        <img src={tick} alt="Tick Icon" className="tickIcon" />
                      )}
                    </div>
                    {errors.VehicleReg && (
                      <span className="errorField">This field is required</span>
                    )}
                  </div>
                  <div className="addressButton">
                    <button type="button" className="lookAddbtn lookBtn">
                      Look up registration
                    </button>
                    <button type="button" className="addManbtn">
                      Enter manually
                    </button>
                  </div>
                  <div className="addressFind">
                    <a className="findAddbtn" href="#">
                      Having trouble finding your vehicle?
                    </a>
                  </div>
                  <label className="labelName">Who owns this vehicle?</label>
                  <div className="radioGroup">
                    <label className="radioLabel">
                      <input
                        type="radio"
                        value="me"
                        {...register("ownership", { required: true })}
                      />
                      Me
                    </label>
                    <label className="radioLabel">
                      <input
                        type="radio"
                        value="someone_else"
                        {...register("ownership", { required: true })}
                      />
                      Someone else
                    </label>
                  </div>
                  {errors.ownership && (
                    <span className="errorField">This field is required</span>
                  )}

                  <div className="dateStyle">
                    <label htmlFor="quotedob" className="labelName">
                      Date of Birth
                    </label>
                    <div className="dobFields">
                      <div>
                        <select
                          id="quoteDay"
                          className={`inputFields dateInputFields text-padding ${
                            errors.quoteDay ? "error" : ""
                          }`}
                          name="quoteDay"
                          defaultValue=""
                          {...register("quoteDay", { required: true })}
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
                        {errors.quoteDay && (
                          <span className="errorField">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div>
                        <select
                          id="quoteMonth"
                          className={`inputFields dateInputFields text-padding ${
                            errors.quoteMonth ? "error" : ""
                          }`}
                          name="quoteMonth"
                          defaultValue=""
                          {...register("quoteMonth", { required: true })}
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
                        {errors.quoteMonth && (
                          <span className="errorField">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div>
                        <select
                          id="quoteYear"
                          defaultValue=""
                          className={`inputFields dateInputFields text-padding ${
                            errors.quoteYear ? "error" : ""
                          }`}
                          name="quoteYear"
                          {...register("quoteYear", { required: true })}
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
                        {errors.quoteYear && (
                          <span className="errorField">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="emailField">
                    <label className="labelName" htmlFor="seats">
                      How Many Seats Does Your Taxi Have
                    </label>
                    <div className="licField">
                      <input
                        placeholder="e.g. 4"
                        type="number"
                        id="seats"
                        name="seats"
                        className={`inputFields nameinput ${
                          errors.seats ? "error" : ""
                        }`}
                        {...register("seats", {
                          required: "This field is required",
                        })}
                      />
                      {watch("seats") && (
                        <img src={tick} alt="Tick Icon" className="tickIcon" />
                      )}
                    </div>
                    {errors.seats && (
                      <span className="errorField">{errors.seats.message}</span>
                    )}
                  </div>
                  <div className="inputFieldContainer">
                    <label className="labelName" htmlFor="marketValue">
                      Estimated market value of vehicle
                    </label>
                    <div className="inputRow">
                      <select
                        id="currency"
                        name="currency"
                        defaultValue=""
                        className="currencySelect"
                        {...register("currency", { required: true })}
                      >
                        <option value="" disabled hidden>
                          £
                        </option>
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
                          className={`inputFields  ${
                            errors.marketValue ? "error" : ""
                          }`}
                          {...register("marketValue", {
                            required: "This field is required",
                          })}
                        />
                        {watch("marketValue") && (
                          <img
                            src={tick}
                            alt="Tick Icon"
                            className="tickIcon"
                          />
                        )}
                      </div>
                    </div>
                    {errors.marketValue && (
                      <span className="errorField">
                        {errors.marketValue.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="multiBtn">
                  <button
                    type="Button"
                    className="prevBtn"
                    onClick={handlePrevious}
                  >
                    {" "}
                    <img className="PrevImg" src={previous} alt="" />
                  </button>
                  <button type="submit" className="nextBtn">
                    Next
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
