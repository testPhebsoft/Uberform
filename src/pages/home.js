import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "fusion-plugin-react-helmet-async";
import { assetUrl } from "fusion-core";
import Pair from "../images/pair";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const css = assetUrl("./home.css");

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState([]);

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
    setFormData(data); // Update formData state with form data
  };

  return (
    <>
      <Helmet>
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
                {/* <FontAwesomeIcon icon="fa-solid fa-circle-check" /> */}
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
                {errors.license && (
                  <span className="errorMessage">{errors.license.message}</span>
                )}
              </div>
              <label htmlFor="selectField" className="labelName">
                Title
              </label>
              <select
                id="selectField"
                className={`inputFields ${errors.title ? "error" : ""}`}
                name="title"
                {...register("title", { required: true })}
              >
                <option value="" disabled selected hidden>
                  e.g Mrs
                </option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
              </select>
              {errors.title && (
                <span className="errorField">This field is required</span>
              )}
              <div className="nameFields">
                <div>
                  <label className="labelName" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    placeholder="Enter your First Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`inputFields ${errors.firstName ? "error" : ""}`}
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <span className="errorField">This field is required</span>
                  )}
                </div>
                <div>
                  <label className="labelName" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    placeholder="Enter Your Last Name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`inputFields ${errors.lastName ? "error" : ""}`}
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span className="errorField">This field is required</span>
                  )}
                </div>
              </div>
              <div className="">
                <label htmlFor="dob" className="labelName">
                  Date of Birth
                </label>
                <div className="dobFields">
                  <div className="">
                    <select
                      id="day"
                      className={`inputFields text-padding ${
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
                      className={`inputFields text-padding ${
                        errors.month ? "error" : ""
                      }`}
                      name="month"
                      defaultValue=""
                      {...register("month", { required: true })}
                    >
                      <option value="" disabled hidden>
                        Month
                      </option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
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
                      className={`inputFields text-padding ${
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
                <button type="submit">Get Started</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
