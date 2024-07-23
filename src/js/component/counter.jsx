import React from "react";
import Digit from './digit.jsx'

const Counter = ({ number }) => {

  const one = Math.floor(number / 1) % 10;
  const two = Math.floor(number / 10) % 10;
  const three = Math.floor(number / 100) % 10;
  const four = Math.floor(number / 1000) % 10;
  const five = Math.floor(number / 10000) % 10;

  return (
    <>
      <div className="counter-container">
        <div className="counter-tile clock-icon">
          <i className="fas fa-clock"></i>
        </div>
        <div className="d-flex flex-row text-white fs-3">
          <span className="counter-digit">{five}</span>
          <span className="counter-digit">:</span>
          <span className="counter-digit">{four}</span>
          <span className="counter-digit">:</span>
          <span className="counter-digit">{three}</span>
          <span className="counter-digit">:</span>
          <span className="counter-digit">{two}</span>
          <span className="counter-digit">:</span>
          <span className="counter-digit">{one}</span>
        </div>
      </div>
    </>
  )
};

export default Counter;