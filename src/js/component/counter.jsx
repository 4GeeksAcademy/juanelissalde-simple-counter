import React, { useState, useEffect } from "react";

const Counter = () => {
  let arr = [0, 0, 0, 0, 0, 0];
  const [counters, setCounters] = useState(arr);

  useEffect(() => {
    const incrementCounters = (counters, index = 0) => {
      if (index < counters.length) {
        if (counters[index] < 9) {
          counters[index] += 1;
        } else {
          counters[index] = 0;
          incrementCounters(counters, index + 1);
        }
      }
    };

    const interval = setInterval(() => {
      setCounters(prevCounters => {
        const newCounters = [...prevCounters];
        incrementCounters(newCounters);
        return newCounters;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="counter-container">
        <div className="counter-tile clock-icon">
          <i className="fas fa-clock"></i>
        </div>
        <div className="d-flex flex-row-reverse">
          {counters.map((counter, index) => (
            <div key={index} className="counter-tile">
              <span className="counter-digit">{counter}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Counter;