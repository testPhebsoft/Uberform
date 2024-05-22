import React from "react";

const NavigationButtons = ({ handlePrevious, handleSubmit, onSubmit, previous }) => (
  <div className="multiBtn">
    <button type="button" className="prevBtn" onClick={handlePrevious}>
      <img className="PrevImg" src={previous} alt="Previous" />
    </button>
    <button type="submit" className="nextBtn" onClick={handleSubmit(onSubmit)}>Next</button>
  </div>
);

export default NavigationButtons;