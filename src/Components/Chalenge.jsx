import React from "react";
import { useState } from "react";

const Chalenge = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const stepIncrease = () => {
    setStep(step + 1);
  };
  const stepDecrease = () => {
    setStep(step - 1);
  };

  const countIncrease = () => {
    setCount(count + step);
  };
  const countDecrease = () => {
    setCount(count - step);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="chalemge">
      <div className="step">
        <div className="btn" onClick={() => stepDecrease()}>
          -
        </div>
        <p>
          Step: <span>{step}</span>
        </p>
        <div className="btn" onClick={() => stepIncrease()}>
          +
        </div>
      </div>

      <div className="count">
        <div className="btn" onClick={() => countDecrease()}>
          -
        </div>
        <p>
          Count: <span>{count}</span>
        </p>
        <div className="btn" onClick={() => countIncrease()}>
          +
        </div>
      </div>

      <p>
        {count === 0
          ? `Today is ${date.toDateString()}`
          : count < 0
          ? `${Math.abs(count)} days ago was ${date.toDateString()}`
          : `${count} days from today is ${date.toDateString()}`}
      </p>
    </div>
  );
};

export default Chalenge;
