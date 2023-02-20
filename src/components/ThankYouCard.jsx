import React from "react";
import thank from "../assets/illustration-thank-you.svg";

function ThankYouCard({ selectedRate }) {
  return (
    <div className="thank-u-card">
      <div className="thank-icon-background">
        <img src={thank} alt="" />
      </div>
      <div className="selected-item-count">
        You selected {selectedRate} out of 5
      </div>
      <div className="thank-u-card-title">Thank You!</div>
      <div className="thank-u-card-paragraph">
        We appreciate you taking the time ti give a rating.
        <br /> If you ever need more support, don't hesitate to get in touch
      </div>
    </div>
  );
}

export default ThankYouCard;
