import React from "react";

import img from "../../assets/possibility.png";

import "./Possibilities.css";

const Possibilities = () => {
  return (
    <div className="possibilities section__padding">
      <div className="possibilities__img-container">
        <img src={img} alt="possibilities" />
      </div>
      <div className="possibilities__texts">
        <p>Request Early Access to Get Started</p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <div>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </div>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default Possibilities;
