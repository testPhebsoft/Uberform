import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "fusion-plugin-react-helmet-async";

import { assetUrl } from "fusion-core";
import Pair from "../images/pair";

const css = assetUrl("./home.css");

const Home = () => {
  <Helmet>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    />
  </Helmet>;
  const tick = assetUrl("../images/tick.svg");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const title = watch("title");
  const license = watch("license");
  const address = watch("address");
  const postcode = watch("postcode");

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

  const [formData, setFormData] = useState([]);

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
    setFormData(data); // Update formData state with form data
  };

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href={css} />
      </Helmet>
      <nav>Uber</nav>

      <div className="container form">
        <div className="container border">
          <Pair />
          <h1>
            Uber Insurance quote in <br /> under 2 minutes
          </h1>
          <p>
            Compare all Uber approved Private Hire motor insurance providers in
            one place. All Private Hire motor policies must be purchased online.
            All providers after automatic uploads of your insurance certificate
            directly to your uber account, which will help streamline your
            verification process.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fields">
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
                  {license &&
                    license.match(
                      /^[a-zA-Z0-9]{3}-[a-zA-Z0-9]{2}-[a-zA-Z0-9]{3}\/[a-zA-Z0-9]{5}$/
                    ) && (
                      <img src={tick} alt="Tick Icon" className="tickIcon" />
                    )}
                </div>

                {errors.license && (
                  <span className="errorMessage">{errors.license.message}</span>
                )}
              </div>
              <label htmlFor="selectField" className="labelName">
                Title
              </label>
              <div className="licField">
                <select
                  id="selectField"
                  className={`inputFields ${errors.title ? "error" : ""}`}
                  name="title"
                  {...register("title", { required: true })}
                >
                  <option value="" disabled selected hidden>
                    <span>e.g Mrs</span>
                  </option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>
                {title && (
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
                    {firstName && (
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
                    {lastName && (
                      <img src={tick} alt="Tick Icon" className="tickIcon" />
                    )}
                  </div>
                  {errors.lastName && (
                    <span className="errorField">This field is required</span>
                  )}
                </div>
              </div>
              <div className="">
                <label htmlFor="dob" className="labelName">
                  Date of Birth
                </label>
                ``
                <div className="dobFields">
                  <div className="">
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
                      <span className="errorField">This field is required</span>
                    )}
                  </div>
                  <div className="">
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
                      <span className="errorField">This field is required</span>
                    )}
                  </div>
                  <div className="">
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
                      <span className="errorField">This field is required</span>
                    )}
                  </div>
                </div>
                <button className="getStartedButton" type="submit">
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* /////////////////////////////////
///////////////////////////////
           Welcome form
///////////////////////////////
///////////////////////////////// */}
      <div className="container form">
        <div className="container border">
          <h1>Welcome Pete!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="fields">
              <div className="">
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
                    {address && (
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
                    {postcode && (
                      <img src={tick} alt="Tick Icon" className="tickIcon" />
                    )}
                  </div>
                  {errors.postcode && (
                    <span className="errorField">This field is required</span>
                  )}
                </div>
                <div className="addressButton">
                  <div>
                    <button>Look up address</button>
                  </div>
                  <div>
                    <button>Enter address manually</button>
                  </div>
               
                </div>
                <div className="addressFind">
                    {" "}
                   <a href="#"><p>having trouble finding your address?</p></a> 
                  </div>
              </div>
              <div className="">
                <label htmlFor="dob" className="labelName">
                  Date of Birth
                </label>
                ``
                <div className="dobFields">
                  <div className="">
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
                      <span className="errorField">This field is required</span>
                    )}
                  </div>
                  <div className="">
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
                      <span className="errorField">This field is required</span>
                    )}
                  </div>
                  <div className="">
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
                      <span className="errorField">This field is required</span>
                    )}
                  </div>
                </div>
                \
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
