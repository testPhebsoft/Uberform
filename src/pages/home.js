import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Helmet } from "fusion-plugin-react-helmet-async";
import { assetUrl } from "fusion-core";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import NavigationButtons from "./NavigationButtons";
import Pair from "../images/pair";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import QuoteInfo from "./QuoteInfo";

const Home = () => {
  const tick = assetUrl("../images/tick.svg");
  const previous = assetUrl("../images/previous.svg");
  const css = assetUrl("./home.css");
  const flag = assetUrl("../../node_modules/react-phone-input-2/lib/style.css");

  const { register, handleSubmit, control, formState: { errors }, watch } = useForm();
  const [currentStep, setCurrentStep] = useState(6);
  const [formData, setFormData] = useState({});
  const [animationClass, setAnimationClass] = useState("step-enter");

  const onSubmit = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    if (currentStep === 6) {
      console.log({ ...formData, ...data }); // Handle final form submission
    } else {
      setAnimationClass("step-exit");
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
        setAnimationClass("step-enter");
      }, 500); // Match this timeout with your animation duration
    }
  };

  const handlePrevious = () => {
    setAnimationClass("step-exit");
    setTimeout(() => {
      setCurrentStep((prevStep) => prevStep - 1);
      setAnimationClass("step-enter");
    }, 500); // Match this timeout with your animation duration
  };

  const datePicker = assetUrl(
    "../../node_modules/react-datepicker/dist/react-datepicker.css"
  );

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
            <div className={animationClass}>
              {currentStep === 1 && (
                <StepOne {...{ register, errors, watch, tick }} />
              )}
              {currentStep === 2 && (
                <StepTwo {...{ register, errors, watch, control, tick }} />
              )}
              {currentStep === 3 && (
                <StepThree {...{ register, errors, watch, control, tick }} />
              )}
              {currentStep === 4 && (
                <StepFour {...{ register, errors, watch, control, tick }} />
              )}
                {currentStep === 5 && (
                <StepFive {...{ register, errors, watch, control, tick }} />
              )}
                {currentStep === 6 && (
                <QuoteInfo {...{ register, errors, watch, control, tick }} />
              )}
            </div>
          </form>
        </div>
      </div>
      {currentStep > 1 && (
        <NavigationButtons
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          previous={previous}
        />
      )}
    </>
  );
};

export default Home;