import React from 'react';
import { Helmet } from "fusion-plugin-react-helmet-async";
import { assetUrl } from "fusion-core";
const QuoteInfo = () => {
    const css = assetUrl("./QuoteInfo.css");
  return (
    <>
    <Helmet>
   
    <link rel="stylesheet" href={css} />
 
  </Helmet>
    
    <div className="quote-info-card">
      <header className="quote-header">
        <h2>Quote Information</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <section className="quotation-pack">
        <h3>Quotation Pack</h3>
        <p>
          A quotation pack has been emailed to you that contains details of the
          information that you have provided and a summary of the cover
          available. This pack includes the summary of demands and needs, our
          terms of business, statement of fact and the Insurance Product
          Information Document (IPID). It's important that you read these to
          make sure the details are correct.
        </p>
      </section>
      <section className="policy-details">
        <h3>Policy Details</h3>
        <div className="policy-detail">
          <span>Quote Reference</span>
          <span>144/052/AI22/WEB</span>
        </div>
        <div className="policy-detail">
          <span>Cover Start Date</span>
          <span>01/05/2024 22:36:05</span>
        </div>
        <div className="policy-detail">
          <span>Vehicle Registration</span>
          <span>HV66 HWP</span>
        </div>
        <div className="policy-detail">
          <span>Cover Level</span>
          <span>Comprehensive</span>
        </div>
        <div className="policy-detail">
          <span>Licensing Authority</span>
          <span>GOSPORT</span>
        </div>
        <div className="policy-detail">
          <span>Uber Branch</span>
          <span>Fareham borough</span>
        </div>
        <div className="policy-detail">
          <span>Insurer</span>
          <span>Sabre Insurance Company Ltd</span>
        </div>
        <div className="policy-detail">
          <span>Policy</span>
          <span>Sabre Uber</span>
        </div>
        <div className="policy-detail">
          <span>Compulsory Excess</span>
          <span>£400</span>
        </div>
        <div className="policy-detail">
          <span>Protected NCD</span>
          <span>No</span>
        </div>
        <div className="policy-detail">
          <span>Years No Claims</span>
          <span>6</span>
        </div>
      </section>
      <section className="payment-options">
        <h3>Payment Options</h3>
        <div className="payment-option">
          <div className="payment-info">
            <span className="price">£159.76 p.m</span>
            <p>£134.25 deposit followed by 9 installments of £159.76 per month</p>
          </div>
        </div>
        <div className="payment-option">
          <div className="payment-info">
            <span className="price">£1,342.50</span>
            <p>One off payment</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default QuoteInfo;