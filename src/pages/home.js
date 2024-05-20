import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "fusion-plugin-react-helmet-async";
import { assetUrl } from "fusion-core";
import Pair from "../images/pair";


const css = assetUrl("./home.css");

const Home = () => {
  const tick = assetUrl("../images/tick.svg");
  const previous = assetUrl("../images/previous.svg");
  // const Right = assetUrl("../images/Right.svg");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const [currentStep, setCurrentStep] = useState(2);
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    if (currentStep === 2) {
      console.log({ ...formData, ...data }); // Handle form submission
      reset();
      setCurrentStep(1);
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
                  Compare all Uber approved Private Hire motor insurance providers in
                  one place. All Private Hire motor policies must be purchased online.
                  All providers offer automatic uploads of your insurance certificate
                  directly to your Uber account, which will help streamline your
                  verification process.
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
                        <img src={tick} alt="Tick Icon" className="tickIcon" />
                      )}
                    </div>
                    {errors.firstName && (
                      <span className="errorField">This field is required</span>
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
                        <img src={tick} alt="Tick Icon" className="tickIcon" />
                      )}
                    </div>
                    {errors.lastName && (
                      <span className="errorField">This field is required</span>
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
                      className={`inputFields ${errors.license ? "error" : ""}`}
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
                        <img src={tick} alt="Tick Icon" className="tickIcon" />
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
                <div className="contactField">
                  <label className="labelName" htmlFor="contact">
                    Contact Number
                  </label>
                  <div className="licField">
                    <input
                      placeholder="99999999999"
                      type="number"
                      id="contact"
                      name="contact"
                      className={`inputFields nameinput ${
                        errors.contact ? "error" : ""
                      }`}
                      {...register("contact", { required: true })}
                    />
                    {watch("contact") && (
                      <img src={tick} alt="Tick Icon" className="tickIcon" />
                    )}
                  </div>
                  {errors.contact && (
                    <span className="errorField">This field is required</span>
                  )}
                  <p className="contactDetail">
                    This must match your Uber Account
                  </p>
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
                        <img src={tick} alt="Tick Icon" className="tickIcon" />
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
                 This is your Uber Pro Status. Please ensure this is accurate as it will be validated by Uber and will affect your price.
                  </p>
                {errors.Rating && (
                  <span className="errorField">This field is required</span>
                )}
             
              </div>
              <div className="multiBtn">
              <button type="Button" className="prevBtn" onClick={handlePrevious}>  <img className="PrevImg"  src={previous} alt="" /></button> 
                  <button  type="submit" className="nextBtn">
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
