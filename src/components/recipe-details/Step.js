import React from "react";

const Step = ({ stepNo, stepDescription }) => {
  return (
    <div class="step">
      <h3>Step {stepNo + 1}</h3>
      <p>{stepDescription}</p>
    </div>
  );
};

export default Step;
