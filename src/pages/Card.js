
import React from "react";


const Card = ({
  companyLogo,
  companyName,
  price,
  pricePerYear,
  monthlyPayments,
  excess,
  excessReduction,
  uninsuredDriver,
  legalCover,
  breakdown,
  publicLiability,
  windscreen,
}) => {
  return (
    <div className="quote-card">
    <div className="quote-header">
      <img src={companyLogo} alt={`${companyName} logo`} className="company-logo" />
      <button className="buy-button">Buy</button>
    </div>
    <h3>{pricePerYear}</h3>
    <p>{monthlyPayments}</p>
    <div className="quote-details">
      <div className="quote-detail">
        <span>Excess</span>
        <span>{excess}</span>
      </div>
      <div className="quote-detail">
        <span>Excess Reduction</span>
        <span className="icon">{excessReduction ? <span classname="crossColor">&#10004;</span> : <span>&#10060;</span>}</span>
      </div>
      <div className="quote-detail">
        <span>Uninsured Driver</span>
        <span className="icon">{uninsuredDriver ? <span>&#10004;</span> : <span>&#10060;</span>}</span>
      </div>
      <div className="quote-detail">
        <span>Legal Cover</span>
        <span>{legalCover}</span>
      </div>
      <div className="quote-detail">
        <span>Breakdown</span>
        <span>{breakdown}</span>
      </div>
      <div className="quote-detail">
        <span>Public Liability</span>
        <span>{publicLiability}</span>
      </div>
      <div className="quote-detail">
        <span>Windscreen</span>
        <span className="icon">{windscreen ? <span>&#10004;</span> : <span>&#10060;</span>}</span>
      </div>
    </div>
  </div>
  );
};


export default Card;