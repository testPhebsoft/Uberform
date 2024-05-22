import React from "react";

import { Helmet } from "fusion-plugin-react-helmet-async";
import { assetUrl } from "fusion-core";

import Card from "./Card";

const StepFive = () => {
  const cardCss = assetUrl("./Card.css");
  const quotes = [
    {
    //   companyLogo: assetUrl("../images/sabre-logo.png"),
      companyName: "Sabre Uber",
      price: "£1343.50",
      pricePerYear: "£1343.50 per year",
      monthlyPayments:
        "Monthly payments 1 x £134.25, 9 x £169.76. Total £1572.07",
      excess: "Compulsory £450 Windscreen £120",
      excessReduction: true,
      uninsuredDriver: true,
      legalCover: "£25 extra £100,000 of legal cover",
      breakdown: "£94 extra RAC Nationwide + Homestart",
      publicLiability: "£250.20 extra £1,000,000 of cover",
      windscreen: true,
    },
    {
    //   companyLogo: assetUrl("../images/somerset-bridge-logo.png"),
      companyName: "Somerset Bridge Taxi",
      price: "£1350.27",
      pricePerYear: "£1350.27 per year",
      monthlyPayments:
        "Monthly payments 1 x £135.07, 9 x £167.03. Total £1581.69",
      excess: "Compulsory £500 Windscreen £90",
      excessReduction: false,
      uninsuredDriver: false,
      legalCover: "£25 extra £100,000 of legal cover",
      breakdown: "£94 extra RAC Nationwide + Homestart",
      publicLiability: "£250.20 extra £1,000,000 of cover",
      windscreen: true,
    },
    {
    //   companyLogo: assetUrl("../images/ers-logo.png"),
      companyName: "ERS Private and Public Hire",
      price: "£1636.01 per year. ",
      pricePerYear: "£1435.78 per year",
      monthlyPayments: "Monthly payments 1 x £146.38, 9 x £173. Total £1702.35",
      excess: "Compulsory £500 Windscreen £75",
      excessReduction: true,
      uninsuredDriver: true,
      legalCover: "£25 extra £100,000 of legal cover",
      breakdown: "£94 extra RAC Nationwide + Homestart",
      publicLiability: "£250.20 extra £1,000,000 of cover",
      windscreen: true,
    },
    {
        //   companyLogo: assetUrl("../images/ers-logo.png"),
          companyName: "KGM Public and Private Hire",
          price: "£1435.78",
          pricePerYear: "££1636.01 per year",
          monthlyPayments: "Monthly payments 1 x £163.60, 9 x £194.68. Total £1915.77",
          excess: "Compulsory £250 Windscreen £90",
          excessReduction: true,
          uninsuredDriver: false,
          legalCover: "£25 extra £100,000 of legal cover",
          breakdown: "£94 extra RAC Nationwide + Homestart",
          publicLiability: "£39.20 extra £10,000,000 of cove",
          windscreen: true,
        },
  ];

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={cardCss} />
      </Helmet>
      <div>
        <h1>Choose your quote</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {quotes.map((quote, index) => (
          <Card key={index} {...quote} />
        ))}
      </div>
    </>
  );
};

export default StepFive;
