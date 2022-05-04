import React from "react";

import "./Feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="feature">
      <div className="feature__title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="feature__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
